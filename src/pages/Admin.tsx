import { useState, useEffect } from "react";
import { Trash2, Mail, Phone, Building2, IndianRupee, CalendarDays, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { getSubmissions, deleteSubmission, type ContactSubmission } from "@/lib/submissions";
import { toast } from "@/hooks/use-toast";

const Admin = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);

  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  const handleDelete = (id: string) => {
    deleteSubmission(id);
    setSubmissions(getSubmissions());
    toast({ title: "Deleted", description: "Submission removed successfully." });
  };

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
