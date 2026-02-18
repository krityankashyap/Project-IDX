import { useMutation } from "@tanstack/react-query"
import { createProjectApi } from "../../../apis/projects"

export const useCreateProject= () => {
  const { mutateAsync, isSuccess, isPending, error}= useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      console.log("Project created successfully:", data);
    },
    onError: () => {
      console.log("Error creating project");
    },
  });

  return {
    createProjectMutation: mutateAsync,
    isSuccess,
    isPending,
    error
  }
}