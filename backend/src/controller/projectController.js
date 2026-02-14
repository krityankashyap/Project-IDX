import util from 'util'
import child_process from 'child_process'
import fs from 'fs/promises'
import uuid4 from 'uuid4';


const execPromisified= util.promisify(child_process.exec);

export const projectController= async (req, res)=>{


  // create a unique id and then inside the project folder create a new file with this id
  const projectId= uuid4();
  console.log("ProjectId: ", projectId);

  fs.mkdir(`./projects/${projectId}`);

  // after this call the npm create vite command in the newly created folders

  const response= await execPromisified(`npm create vite@latest sandbox -- --template react`, {
    cwd: `./projects/${projectId}`,
  })

  res.json({
    message: "Project created successfully",
    projectId: projectId,
  })

}