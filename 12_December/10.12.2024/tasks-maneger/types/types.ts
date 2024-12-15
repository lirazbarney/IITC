export type Priority = "low" | "medium" | "high";
export type Status = "pending" | "in progress" | "completed";

export interface Task {
    title: string;
    description: string;
    dueDate: string;
    priority: Priority;
    status: Status;
    id: string;
}