import Users from './Users';

function App() {

    let data = [
        {
            grid: 1,
            name: 'Kishan',
            email: 'kishan@gmail.com',
            password: 'kishan@123',
            course: ["Html, CSS, Bootstrap, JavaScript"],
            city: "Surat"
        },
        {
            grid: 2,
            name: 'Jay',
            email: 'jay@gmail.com',
            password: 'kishan@123',
            course: ["Photosho, Figma"],
            city: "Rajkot"
        },
        {
            grid: 3,
            name: 'Ajay',
            email: 'ajay@gmail.com',
            password: 'ajay@123',
            course: ["Html, CSS, Bootstrap, Nodejs"],
            city: "Amareli"
        },
        {
            grid: 4,
            name: 'Nisha',
            email: 'nisha@gmail.com',
            password: 'nisha@123',
            course: ["Html, CSS, Bootstrap, Python"],
            city: "Vadodara"
        },
        {
            grid: 5,
            name: 'Naitik',
            email: 'naitik@gmail.com',
            password: 'naitik@123',
            course: ["DSA With C++, Bootstrap, Python"],
            city: "Bopal"
        },
        {
            grid: 6,
            name: 'Nikunj',
            email: 'nikunj@gmail.com',
            password: 'nikunj@123',
            course: ["Html, CSS, jQuery, Python"],
            city: "Bangalore"
        },
        {
            grid: 7,
            name: 'Sapna',
            email: 'sapna@gmail.com',
            password: 'sapna@123',
            course: ["Html, C, DSA with C++, Python"],
            city: "Puna"
        },
        {
            grid: 8,
            name: 'Smit',
            email: 'smit@gmail.com',
            password: 'smit@123',
            course: ["Html, CSS, C++, Python"],
            city: "Vadodara"
        }

    ]
    return (
        <Users userList={data} />
    );
}

export default App;

