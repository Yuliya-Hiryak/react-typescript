import React from 'react';
import { useHistory } from 'react-router-dom'


export const AboutPage: React.FC = () => {
  const history =  useHistory()
  return (
    <>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel libero adipisci quia rem officia neque impedit sunt aspernatur excepturi deleniti! Earum veniam recusandae quasi provident est molestiae, ipsam magni placeat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In omnis fugiat doloribus libero placeat soluta, voluptas perferendis exercitationem laborum, amet eaque aspernatur quasi earum aliquam, delectus fuga enim optio. Distinctio corrupti minus quas, ex dolorum culpa debitis necessitatibus facilis quos cumque. Soluta expedita quo quia dolorem excepturi incidunt eos nam eaque alias, repellat aliquam dolor quidem ipsam accusantium nulla earum tenetur provident fugit, possimus facere aspernatur amet reprehenderit dolore rem!
      </p>
      <button className="btn" onClick={() => history.push('/')}>Back to Todo List</button>
    </>
  )
}
