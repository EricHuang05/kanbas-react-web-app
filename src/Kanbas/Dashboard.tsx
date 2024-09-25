import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> 
      <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} alt="React JS" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack software developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="/images/python.jpg" width={200} alt="Python" />
            <div>
              <h5>CS5678 Python</h5>
              <p className="wd-dashboard-course-title">Introduction to Python Programming</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9101/Home">
            <img src="/images/nodejs.jpg" width={200} alt="Node.js" />
            <div>
              <h5>CS9101 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend Development with Node.js</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1121/Home">
            <img src="/images/java.jpg" width={200} alt="Java" />
            <div>
              <h5>CS1121 Java</h5>
              <p className="wd-dashboard-course-title">Object-Oriented Programming in Java</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1314/Home">
            <img src="/images/htmlcss.jpg" width={200} alt="HTML & CSS" />
            <div>
              <h5>CS1314 HTML & CSS</h5>
              <p className="wd-dashboard-course-title">Web Design and Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1516/Home">
            <img src="/images/django.jpg" width={200} alt="Django" />
            <div>
              <h5>CS1516 Django</h5>
              <p className="wd-dashboard-course-title">Building Web Apps with Django</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1718/Home">
            <img src="/images/angular.jpg" width={200} alt="Angular" />
            <div>
              <h5>CS1718 Angular</h5>
              <p className="wd-dashboard-course-title">Frontend Frameworks with Angular</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
