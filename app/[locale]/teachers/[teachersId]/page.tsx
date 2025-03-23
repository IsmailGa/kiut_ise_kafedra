"use client";

import Container from "@/components/container";
import TeacherInfo from "./sections/info";
import React, { useEffect } from "react";
import { Teacher } from "@/types/teachers";
import api from "@/api/axios";

const Teachers = ({ params }: { params: { teachersId: string } }) => {
 
  const [data, setData] = React.useState<Teacher | null>(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    api
      .get("/teachers/" + params.teachersId)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.message);
        console.error("Error fetching teachers:", error);
      });
  }, [params.teachersId, error]);

  return (
    <Container>
      <TeacherInfo data={data ?? null} />
    </Container>
  );
};

export default Teachers;
