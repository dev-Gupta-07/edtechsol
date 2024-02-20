
import Layout from '@/components/Layout'
import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";

interface Student {
  id: number;
  name: string;
  course: string;
  project: string;
}

const students: Student[] = [
  {
    id: 1,
    name: "John Doe",
    course: "Computer Science",
    project: "Web Development",
  },
  {
    id: 2,
    name: "Jane Smith",
    course: "Data Science",
    project: "Machine Learning",
  },
  // Add more students as needed
];
const QueryContent = () => {
  return (
    <>
    <Layout>
        
      <Table  sx={{ width: '100%', marginTop: '20px', overflowX: 'auto'}} aria-label="students table">
      <TableHead>
        <TableRow sx={{ bgcolor: '#171717' }}>
          <TableCell sx={{ color: '#ffffff', minWidth: '120px' }}>StudentID</TableCell>
          <TableCell sx={{ color: '#ffffff', minWidth: '120px' }}>Name</TableCell>
          <TableCell sx={{ color: '#ffffff', minWidth: '120px' }}>Course Name</TableCell>
          <TableCell sx={{ color: '#ffffff', minWidth: '120px' }}>Project Name</TableCell>
          <TableCell sx={{ color: '#ffffff', minWidth: '120px' }}>Action</TableCell>
          <TableCell sx={{ color: '#ffffff', minWidth: '120px' }}>Escalation</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id} sx={{ bgcolor: '#525252', '&:last-child td': { borderBottom: 0 } }}>
            <TableCell>{student.id}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.course}</TableCell>
            <TableCell>{student.project}</TableCell>
            <TableCell>
              <Select defaultValue="Not responded" sx={{ minWidth: '120px', color: '#ffffff' }}>
                <MenuItem value="Not responded">Not responded</MenuItem>
                <MenuItem value="Ongoing">Ongoing</MenuItem>
                <MenuItem value="Resolution">Resolution</MenuItem>
                <MenuItem value="No Resolution">No Resolution</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <Select defaultValue="Not resolved" sx={{ minWidth: '120px', color: '#ffffff' }}>
                <MenuItem value="Not resolved">Not resolved</MenuItem>
                <MenuItem value="Not my domain">Not my domain</MenuItem>
                <MenuItem value="Student Not satisfied">Student Not satisfied</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Layout>
    </>
  )
}

export default QueryContent