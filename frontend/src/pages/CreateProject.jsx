import { Button, Col, Row } from "antd";
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
   <Row>
      <Col span={24}>
        <Button type="primary" onClick={handleCreateProject}>
          Create Project
        </Button>
      </Col>
   </Row>
  )
}