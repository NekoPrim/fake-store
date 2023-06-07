function ListItem({text}) {
    return <li>{text}</li>
  }

function Intro() {
    const name = 'Xen';
    const isAdmin = true;
    const todo = ['Feed cats', 'Play games', 'Fix computer'];
    const data = {
        time: new Date().toString(),
    }
    return (
        <div className="App">
            {isAdmin ? <h1>Welcome Admin</h1> : 'Welcome user'}
            <p>{data.time}</p>
            Hello, {name}
            <div style={{paddingLeft: '300px', justifyContent: 'center'}}>
                <ul key={task}>
                {todo.map((task) => <ListItem text={task}/>)}
                </ul>
            </div>
        </div>
    );
}

export default Intro;