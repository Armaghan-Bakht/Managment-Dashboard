// App.js
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/main/index';
import Employe from './pages/employe/Employe';
import CreateEmploye from './pages/employe/CreateEmploye';
import EditEmploye from './pages/employe/EditEmploye';
import Customer from './pages/customer/Customer';
import Projects from './pages/Projects/Projects';
import CreateProject from './pages/Projects/CreateProject';
import EditProject from './pages/Projects/EditProject';
import ProjectDetails from './pages/Projects/ProjectDetails';
import TaskBoard from './pages/Projects/TaskBoard';
import TaskList from './pages/Projects/TaskList';
import Attendance from './pages/attendence/Attendance';
import LeaveRequest from './pages/leaveRequest/LeaveRequest';
import CreateIncome from './pages/income/CreateIncome';
import Income from './pages/income/Income';
import Expense from './pages/expense/Expense';
import CreateExpense from './pages/expense/CreateExpense';
import ExpenseCategory from './pages/expense/ExpenseCategory';
import Department from './pages/department/Department';
import Designation from './pages/designation/Designation';
import JobType from './pages/jobType/JobType';
import JobLocation from './pages/jobLocation/JobLocation';
// import LeaveType from './pages/leaveType/LeaveType';
import AttendenceReport from './pages/attendenceReport/AttendenceReport';
import EmployeReport from './pages/employeReport/EmployeReport';
import FinanceReport from './pages/financeReport/FinanceReport';
import Login from './components/Login';
import ProtectedRoute from './Routes/ProtectedRoute';
import DarkModeButton from './components/DarkModeButton';

function App() {
  return (
    <div>
      <ProtectedRoute>
        <Navbar />
        <Sidebar />
        <DarkModeButton/>
      </ProtectedRoute>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Redirect root path to home if authenticated, else to login */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Protected routes */}
        <Route
          path="/employe"
          element={
            <ProtectedRoute>
              <Employe />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employe/createEmploye"
          element={
            <ProtectedRoute>
              <CreateEmploye />
            </ProtectedRoute>
          }
        />
        <Route
        path="/employe/editEmploye/:id"
          element={
            <ProtectedRoute>
              <EditEmploye />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer"
          element={
            <ProtectedRoute>
              <Customer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        {/* Add ProtectedRoute to all other protected pages in a similar way */}

        <Route path="/projects/addprojects" element={<ProtectedRoute><CreateProject /></ProtectedRoute>} />
        <Route path="/projects/editprojects/:id" element={<ProtectedRoute><EditProject /></ProtectedRoute>} />
        <Route path="/projects/projectDetails/:id" element={<ProtectedRoute><ProjectDetails /></ProtectedRoute>} />
        <Route path="/projects/taskBoard" element={<ProtectedRoute><TaskBoard /></ProtectedRoute>} />
        <Route path="/projects/taskList" element={<ProtectedRoute><TaskList /></ProtectedRoute>} />
        <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
        <Route path="/leaverequest" element={<ProtectedRoute><LeaveRequest /></ProtectedRoute>} />
        <Route path="/income" element={<ProtectedRoute><Income /></ProtectedRoute>} />
        <Route path="/create/income" element={<ProtectedRoute><CreateIncome /></ProtectedRoute>} />
        <Route path="/expense" element={<ProtectedRoute><Expense /></ProtectedRoute>} />
        <Route path="/expense/createExpense" element={<ProtectedRoute><CreateExpense /></ProtectedRoute>} />
        <Route path="/expense/expenseCategory" element={<ProtectedRoute><ExpenseCategory /></ProtectedRoute>} />
        <Route path="/department" element={<ProtectedRoute><Department /></ProtectedRoute>} />
        <Route path="/designation" element={<ProtectedRoute><Designation /></ProtectedRoute>} />
        <Route path="/jobType" element={<ProtectedRoute><JobType /></ProtectedRoute>} />
        <Route path="/jobLocation" element={<ProtectedRoute><JobLocation /></ProtectedRoute>} />
        {/* <Route path="/leaveType" element={<ProtectedRoute><LeaveType /></ProtectedRoute>} /> */}
        <Route path="/attendenceReport" element={<ProtectedRoute><AttendenceReport /></ProtectedRoute>} />
        <Route path="/employeReport" element={<ProtectedRoute><EmployeReport /></ProtectedRoute>} />
        <Route path="/financeReport" element={<ProtectedRoute><FinanceReport /></ProtectedRoute>} />

        {/* Catch-all redirect for undefined routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ProtectedRoute>
        <Footer />
      </ProtectedRoute>


    </div>
  );
}

export default App;
