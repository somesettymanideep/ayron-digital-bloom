import { useState, useEffect } from "react";
import { Trash2, Mail, Phone, Building2, IndianRupee, CalendarDays, ArrowLeft, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { getSubmissions, deleteSubmission, type ContactSubmission } from "@/lib/submissions";
import { toast } from "@/hooks/use-toast";

const ADMIN_EMAIL = "ads@gmail.com";
const ADMIN_PASS = "Ads@1234";
const SESSION_KEY = "admin_authenticated";

const LoginGate = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASS) {
      sessionStorage.setItem(SESSION_KEY, "true");
      onLogin();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm border border-border bg-card p-8 space-y-5">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Lock size={22} className="text-primary" />
          </div>
          <h1 className="font-display text-2xl text-foreground">Admin Login</h1>
          <p className="font-body text-sm text-muted-foreground mt-1">Sign in to view enquiries</p>
        </div>
        {error && <p className="font-body text-sm text-destructive text-center">{error}</p>}
        <div>
          <label className="font-body text-sm text-foreground font-medium block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-border bg-background text-foreground font-body text-sm px-4 py-3 outline-none focus:border-primary transition-colors"
            placeholder="admin@example.com"
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
            required
          />
        </div>
        <button type="submit" className="w-full bg-primary text-primary-foreground font-display text-lg py-3 hover:bg-primary/90 transition-colors">
          Sign In
        </button>
      </form>
    </main>
  );
};

const Admin = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === "true");
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);

  useEffect(() => {
    if (authed) setSubmissions(getSubmissions());
  }, [authed]);

  const handleDelete = (id: string) => {
    deleteSubmission(id);
    setSubmissions(getSubmissions());
    toast({ title: "Deleted", description: "Submission removed successfully." });
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
  };

  if (!authed) return <LoginGate onLogin={() => setAuthed(true)} />;

  return (
    <main className="pt-20 pb-16 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-1 text-primary text-sm font-body mb-2 hover:underline">
              <ArrowLeft size={14} /> Back to site
            </Link>
            <h1 className="font-display text-4xl md:text-5xl text-foreground">Enquiries</h1>
            <p className="font-body text-muted-foreground text-sm mt-1">
              {submissions.length} submission{submissions.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-destructive transition-colors px-3 py-2 border border-border"
          >
            <LogOut size={15} /> Logout
          </button>
        </div>

        {submissions.length === 0 ? (
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
