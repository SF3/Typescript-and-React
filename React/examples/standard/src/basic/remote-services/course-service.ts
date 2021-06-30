import axios from "axios";
import {Course} from "./Course";

const baseUrl = "http://localhost:8080/courses";

export class CourseService {
    async getAll(): Promise<Course[]> {
        const response = await axios.get<Course[]>(baseUrl);
        return response.data;
    }

    async get(id: string): Promise<Course> {
        const response = await axios.get<Course>(`${baseUrl}/${id}`);
        return response.data;
    }

    async put(course: Course): Promise<string> {
        const response = await axios.put<string>(`${baseUrl}/${course.id}`, course);
        return response.data;
    }

    async delete(id: string): Promise<string> {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    }
}
