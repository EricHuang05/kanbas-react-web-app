export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"> <strong>Assignment Name</strong> </label>
        <br/><br/>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
          your Web application running on Netlify. The landing page should 
          include the follow: Your full name and section Links to each
          of the lab assignments Link to the Kanbas application Links to all
          relevant source code repositories The Kanbas application should
          include a Link to navigate back to the landing page.
        </textarea>
        <br/> <br/>
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <br/>
       

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option>ASSIGNMENTS</option>
            </select>
          </td>
        </tr>

        <br/>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option>Percentage</option>
            </select>
          </td>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option>Online</option>
            </select>
          </td>
        </tr>
      </table>
      
      <br />

      <div>
        <label>Online Entry Options</label>
        <div>
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div>
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>
        <div>
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div>
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div>
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>
        </div>
      </div>

      <br />

      <label htmlFor="wd-assign-to">Assign to</label>
      <br/>
      <select id="wd-assign-to">
        <option>Everyone</option>
      </select>
      
      <br /><br />

      
      <label htmlFor="wd-due-date">Due</label>
      <br/>
      <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
      <br /><br />

      
      <label htmlFor="wd-available-from">Available from</label>
      <input type="date" id="wd-available-from" defaultValue="2024-05-06" />

      <label htmlFor="wd-available-until" style={{ marginLeft: '20px' }}>Until</label>
      <input type="date" id="wd-available-until" defaultValue="2024-05-20" />
      
      <br /><br />

      
      <hr />
      <button>Cancel</button>
      <button style={{ marginLeft: '10px' }}>Save</button>

    </div>
);}
 