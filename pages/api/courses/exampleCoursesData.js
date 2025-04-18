//** This file will be discarded once the production API is ready */



const placeholder = 'https://placehold.co/';

    const exampleUser = {
        _id: '123456abc',
        name: 'FirstLast Name',
        email: 'example@example.com',
        emailVerified: true,
        role: 'instructor',
        active: true,
        image: `${placeholder}50x50`,
    };

    const exampleLesson = function (title) {
        let lessonId = title.split(' ').join('').toLowerCase();
        return {
            lessonId,
            title: title,
            content: '[The lesson content]',
            resource_url: 'https://resource',
        };
    }
   export const exampleCourses = [
        {
            courseId: "001algebra",
            title: 'Algebra I',
            description: 'This is an introductory course.',
            image: `${placeholder}350x150/png`,
            subject: 'Mathematics',
            published: new Date().toISOString(),
            instructor: exampleUser,
            updated: new Date().toISOString(),
            lessons: [exampleLesson("Basic Algebra Concepts"), exampleLesson("Linear Equations"), exampleLesson("Functions"), exampleLesson("Radicals")],
        },
        {
            courseId: "002algebra",
            title: 'Algebra II',
            description: "This is the second course in algebra",
            image: `${placeholder}350x150/png`,
            subject: 'Mathematics',
            published: new Date().toISOString(),
            instructor: exampleUser,
            updated: new Date().toISOString(),
            lessons: [exampleLesson("Polynomials"), exampleLesson("Quadratic Functions"), exampleLesson("Exponential Functions")]
        }, {
            courseId: "introToMath",
            title: 'Introduction to Math Fundamentals',
            description: 'This is a course on basics and fundamentals',
            image: `${placeholder}350x150/png`,
            subject: 'Mathematics',
            published: new Date().toISOString(),
            instructor: exampleUser,
            updated: new Date().toISOString(),
            lessons: [exampleLesson("Introduction to Math 1"), exampleLesson("Introduction to Math 2"), exampleLesson("Introduction to Math 3"), exampleLesson("Introduction to Math 4"), exampleLesson("Introduction to Math 5")],
        }, {
            courseId: "001spanish",
            title: 'Introduction to Spanish',
            description: 'This is a course on basics and fundamentals to Spanish',
            image: `${placeholder}350x150/png`,
            subject: 'Foreign_Languages',
            published: new Date().toISOString(),
            instructor: exampleUser,
            updated: new Date().toISOString(),
            lessons: [exampleLesson("Nouns"),exampleLesson("Verbs"),exampleLesson("Adjectives")],
        },
        {
            courseId: "00java",
            title: 'Introduction to Java',
            description: 'This is a course on basics and fundamentals to the Java programming language',
            image: `${placeholder}350x150/png`,
            subject: 'Computer_Science',
            published: new Date().toISOString(),
            instructor: exampleUser,
            updated: new Date().toISOString(),
            lessons: [exampleLesson("Primatives"),exampleLesson("Syntax"),exampleLesson("Functions")],
        }

    ];