import { useState, useEffect } from "react";
import { Trash2, Mail, Phone, Building2, IndianRupee, CalendarDays, ArrowLeft, LogOut, Lock, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import {
  getSubmissions,
  deleteSubmission,
  exportSubmissionsCSV,
  type ContactSubmission,
} from "@/lib/submissions";
import { toast } from "@/hooks/use-toast";

const ADMIN_USERNAME = "ADS";
const ADMIN_EMAIL = "ads@ayrondigital.in";
const ADMIN_PASS = "ADS@2026";

// Ensures the admin auth user exists, then signs in.
const ensureAdminSignedIn = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: ADMIN_EMAIL,
    password: ADMIN_PASS,
  });
  if (!error) return { ok: true as const };

  // If invalid credentials, try to create the admin user (first-time setup), then sign in.
  if (error.message?.toLowerCase().includes("invalid")) {
    const { error: signUpErr } = await supabase.auth.signUp({
      email: ADMIN_EMAIL,
      password: ADMIN_PASS,
      options: { emailRedirectTo: `${window.location.origin}/admin` },
    });
    if (signUpErr && !signUpErr.message?.toLowerCase().includes("registered")) {
      return { ok: false as const, message: signUpErr.message };
    }
    const { error: retryErr } = await supabase.auth.signInWithPassword({
      email: ADMIN_EMAIL,
      password: ADMIN_PASS,
    });
    if (retryErr) return { ok: false as const, message: retryErr.message };
    return { ok: true as const };
  }
  return { ok: false as const, message: error.message };
};

const LoginGate = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (username.trim() !== ADMIN_USERNAME || password !== ADMIN_PASS) {
      setError("Invalid username or password");
      return;
    }
    setLoading(true);
    const result = await ensureAdminSignedIn();
    setLoading(false);
    if (result.ok) {
      onLogin();
    } else {
      setError(result.message || "Could not sign in");
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background px-4 relative z-50">
      <form onSubmit={handleLogin} className="w-full max-w-sm border border-border bg-card p-8 space-y-5 relative z-50">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Lock size={22} className="text-primary" />
          </div>
          <h1 className="font-display text-2xl text-foreground">Admin Login</h1>
          <p className="font-body text-sm text-muted-foreground mt-1">Sign in to view enquiries</p>
        </div>
        {error && <p className="font-body text-sm text-destructive text-center">{error}</p>}
        <div>
          <label className="font-body text-sm text-foreground font-medium block mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-border bg-background text-foreground font-body text-sm px-4 py-3 outline-none focus:border-primary transition-colors"
            placeholder="ADS"
            autoComplete="username"
            required
          />
        </div>
        <div>
          <label className="font-body text-sm text-foreground font-medium block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-border bg-background text-foreground font-body text-sm px-4 py-3 outline-none focus:border-primary transition-colors"
            placeholder="••••••••"
            autoComplete="current-password"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground font-display text-lg py-3 hover:bg-primary/90 transition-colors disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </main>
  );
};

const Admin = () => {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loadingList, setLoadingList] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setAuthed(!!session);
    });
    supabase.auth.getSession().then(({ data }) => {
      setAuthed(!!data.session);
      setChecking(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const loadSubmissions = async () => {
    setLoadingList(true);
    try {
      const data = await getSubmissions();
      setSubmissions(data);
    } catch (err: any) {
      toast({ title: "Failed to load", description: err?.message ?? "Try again.", variant: "destructive" });
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    if (authed) loadSubmissions();
  }, [authed]);

  const handleDelete = async (id: string) => {
    try {
      await deleteSubmission(id);
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      toast({ title: "Deleted", description: "Submission removed successfully." });
    } catch (err: any) {
      toast({ title: "Delete failed", description: err?.message ?? "Try again.", variant: "destructive" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAuthed(false);
    setSubmissions([]);
  };

  const handleExport = () => {
    if (submissions.length === 0) {
      toast({ title: "Nothing to export", description: "No submissions available." });
      return;
    }
    exportSubmissionsCSV(submissions);
  };

  if (checking) {
    return <main className="min-h-screen flex items-center justify-center bg-background"><p className="font-body text-muted-foreground">Loading…</p></main>;
  }

  if (!authed) return <LoginGate onLogin={() => setAuthed(true)} />;

  return (
    <main className="pt-20 pb-16 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <div>
            <Link to="/" className="inline-flex items-center gap-1 text-primary text-sm font-body mb-2 hover:underline">
              <ArrowLeft size={14} /> Back to site
            </Link>
            <h1 className="font-display text-4xl md:text-5xl text-foreground">Enquiries</h1>
            <p className="font-body text-muted-foreground text-sm mt-1">
              {submissions.length} submission{submissions.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="inline-flex items-center gap-2 font-body text-sm bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors"
            >
              <Download size={15} /> Export CSV
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-destructive transition-colors px-3 py-2 border border-border"
            >
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>

        {loadingList ? (
          <p className="font-body text-muted-foreground text-center py-12">Loading submissions…</p>
        ) : submissions.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-body text-muted-foreground text-lg">No submissions yet.</p>
            <p className="font-body text-muted-foreground text-sm mt-1">
              Form submissions from the <Link to="/contact" className="text-primary hover:underline">contact page</Link> will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {submissions.map((s) => (
              <div
                key={s.id}
                className="border border-border bg-card p-5 md:p-6 flex flex-col md:flex-row md:items-start gap-4"
              >
                {/* Info */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display text-xl text-foreground">{s.fullName}</h3>
                    <span className="font-body text-xs text-muted-foreground flex items-center gap-1">
                      <CalendarDays size={12} />
                      {new Date(s.submittedAt).toLocaleDateString("en-IN", {
                        day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
                      })}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-1 font-body text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Mail size={13} /> {s.email}</span>
                    {s.phone && <span className="flex items-center gap-1"><Phone size={13} /> {s.phone}</span>}
                    {s.company && <span className="flex items-center gap-1"><Building2 size={13} /> {s.company}</span>}
                    {s.budget && <span className="flex items-center gap-1"><IndianRupee size={13} /> {s.budget}</span>}
                  </div>

                  {s.services.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {s.services.map((svc) => (
                        <span key={svc} className="font-body text-xs bg-primary/10 text-primary px-2.5 py-1">
                          {svc}
                        </span>
                      ))}
                    </div>
                  )}

                  {s.message && (
                    <p className="font-body text-sm text-foreground/80 pt-1 whitespace-pre-line">{s.message}</p>
                  )}
                </div>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(s.id)}
                  className="self-start shrink-0 p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                  title="Delete submission"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Admin;
