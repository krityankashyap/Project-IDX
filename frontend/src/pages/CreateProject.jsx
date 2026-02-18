import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"

export const CreateProject= ()=>{

  const { createProjectMutation , isPending} = useCreateProject();

  async function handleCreateProject() {
    console.log("Going to trigger the api call to create projects");
    try {
      await createProjectMutation();
      console.log("Now we should redirect the editor");
    } catch (error) {
      console.log("Error creating project:", error);
    }
  }
  return (
    <div>
      <h1>Create Project</h1>
      <button onClick={handleCreateProject}>Create Project</button>
      {isPending && <p>Creating project...</p>}
    </div>
  )
}