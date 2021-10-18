import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext);

    return (
        <ListGroup className="mt-4" style={{borderRadius: "8px"}}>
            {users.map(user => (
                <ListGroupItem className="d-flex" style={{justifyContent: "space-between", alignItems: "center"}}>
                    <strong>{user.name}</strong>
                    <div className="" >
                        <Link className="btn btn-warning m-2" to={`/edit/${user.id}`}>Edit</Link>
                        <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>

    )
}
