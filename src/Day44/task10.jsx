export default function Studentattendance(){
    const students = [
        {id:1,name:"Divya",ispresent:true},
        {id:2,name:"Kavya",ispresent:false},
        {id:3,name:"Iniya",ispresent:true}
    ];
    return(
        <div style={{padding:"20px"}}>
            <h2>Student Attendance</h2>
            <ul>
                {students.map((student) => (
                    <li key = {student.id}>
                        {student.name} - {""}
                        {student.ispresent ? "present":"absent"}
                    </li>
                ))}
            </ul>
        </div>
    );
}