import { User } from '../models/user';

export interface Lesson {

    title: string,
    content: string,
    resource_url: string

}


export interface Course {

    title: string
    description: string
    image?: Buffer
    category: string
    published: string
    instructor: User
    updated: Date
    lessons?: Lesson[]

}


export interface Enrollment {

    course: Course
    updated: Date,
    enrolled: boolean
    student: User
    lessonStatus: [{ lesson: Lesson, complete: boolean }],
    completed: Date

}