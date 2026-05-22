import { supabase } from "@/integrations/supabase/client";

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  budget: string;
  message: string;
  submittedAt: string;
}

type Row = {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  company: string | null;
  services: string[] | null;
  budget: string | null;
  message: string | null;
  submitted_at: string;
};

const fromRow = (r: Row): ContactSubmission => ({
  id: r.id,
  fullName: r.full_name,
  email: r.email,
  phone: r.phone ?? "",
  company: r.company ?? "",
  services: r.services ?? [],
  budget: r.budget ?? "",
  message: r.message ?? "",
  submittedAt: r.submitted_at,
});

export const getSubmissions = async (): Promise<ContactSubmission[]> => {
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("submitted_at", { ascending: false });
  if (error) throw error;
  return (data as Row[]).map(fromRow);
};

export const addSubmission = async (
  data: Omit<ContactSubmission, "id" | "submittedAt">
) => {
  const { error } = await supabase.from("contact_submissions").insert({
    full_name: data.fullName,
    email: data.email,
    phone: data.phone || null,
    company: data.company || null,
    services: data.services,
    budget: data.budget || null,
    message: data.message || null,
  });
  if (error) throw error;
};

export const deleteSubmission = async (id: string) => {
  const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
  if (error) throw error;
};

export const exportSubmissionsCSV = (subs: ContactSubmission[]) => {
  const headers = ["Submitted At", "Full Name", "Email", "Phone", "Company", "Services", "Budget", "Message"];
  const escape = (v: string) => `"${(v ?? "").replace(/"/g, '""')}"`;
  const rows = subs.map((s) => [
    new Date(s.submittedAt).toLocaleString("en-IN"),
    s.fullName,
    s.email,
    s.phone,
    s.company,
    s.services.join("; "),
    s.budget,
    (s.message || "").replace(/\n/g, " "),
  ].map(escape).join(","));
  const csv = [headers.map(escape).join(","), ...rows].join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
