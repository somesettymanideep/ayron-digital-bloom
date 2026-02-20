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

const STORAGE_KEY = "contact_submissions";

export const getSubmissions = (): ContactSubmission[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

export const addSubmission = (data: Omit<ContactSubmission, "id" | "submittedAt">) => {
  const submissions = getSubmissions();
  submissions.unshift({
    ...data,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
};

export const deleteSubmission = (id: string) => {
  const submissions = getSubmissions().filter((s) => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
};
