import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./TaskList.css";
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    };
};

function ListTask(props) {
    const [filter, setFilter] = useState(false);
    const [done, setDone] = useState(false);

    return (
        <div className="listTask">
            <div className="group-btn">
                <Button
                    variant="warning"
                    style={{ backgroundColor: "#F0E68C" }}
                    onClick={() => {
                        setFilter(true);
                        setDone(true);
                    }}
                >
                    Show Done
                </Button>
                <Button
                    variant="danger"
                    style={{ backgroundColor: "#800517" }}
                    onClick={() => {
                        setFilter(true);
                        setDone(false);
                    }}
                >
                    {" "}
                    Show Not Done
                </Button>
                <Button
                    variant="outline-info"
                    onClick={() => setFilter(false)}
                    style={{ backgroundColor: "#123456", width: "70px" }}
                >
                    All
                </Button>
            </div>
            <div className="list">
                {!filter
                    ? props.tasks.map((task, index) => (
                          <TaskItem task={task} key={index} />
                      ))
                    : done
                    ? props.tasks
                          .filter((task) => task.isDone === true)
                          .map((task, index) => (
                              <TaskItem task={task} key={index} />
                          ))
                    : props.tasks
                          .filter((task) => task.isDone === false)
                          .map((task, index) => (
                              <TaskItem task={task} key={index} />
                          ))}
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(ListTask);
