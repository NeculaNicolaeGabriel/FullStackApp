package com.example.Studentsystem.service;

import com.example.Studentsystem.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);

    public List<Student> getAllStudent();
}
