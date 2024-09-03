"use client";
import Card from "../components/Issue-Card";
import IssueItem from "@/components/Issue-Card/Issue-Item";
import { useEffect, useState } from "react";

interface Issue {
  id: number;
  title: string;
  description: string;
}

export default function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/issues")
      .then((res) => res.json())
      .then((data) => setIssues(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex justify-center py-16">
      <Card title={"Development Issues"}>
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </Card>
    </div>
  );
}
