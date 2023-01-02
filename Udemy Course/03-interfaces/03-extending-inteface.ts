// We can extend interfaces to reduce code redundancy.
enum Courses{
    MBA,
    BCA,
    BBA,
    MCA
}

interface IStudent{
    name: string;
    age: number;
}

interface SchoolStudent extends IStudent{
    PTAMeetingDate: Date
}

interface CollegeStudent extends IStudent{
    FarewellDate: Date;
    IVDate: Date;
    courseName: Courses; //Enum Types
    collegeLocation: "IN" | "PAK" //Literal Types
}

const sreejith: CollegeStudent = {
    name: 'Sreejith',
    age: 26,
    FarewellDate: new Date(),
    IVDate: new Date(),
    courseName: 1,
    collegeLocation: "IN"
}