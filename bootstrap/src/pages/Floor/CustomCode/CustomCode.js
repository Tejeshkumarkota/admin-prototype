import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, useNodesState, useEdgesState, Controls, } from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from './Components/Sidebar';
import { Row, Col, Card } from 'react-bootstrap';
import ViewCodePopup from "../../Components/ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../../Components/ViewCodeButton/ViewCodeButton";
import { FloorPlanCustomCodeData } from '../../ViewCodeData/ViewCodeData';

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'input node' },
        position: { x: 250, y: 5 },
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const CustomCode = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: `${type} node` },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    const [show, setShow] = useState(false);

    return (
        <>
            <Row className="mb-4">
                <Col><h4 className="fw-boldest text-black mb-0">Floor Plan Custom Code</h4></Col>
                <Col className="text-end">
                    <ViewCodeButton show={show} setShow={setShow} />
                </Col>
            </Row>
            <Card>
                <Card.Body>
                    <Row className="dndflow">
                        <Col>
                            <ReactFlowProvider className="w-100">
                                <Row>
                                    <Col sm={4}><Sidebar /></Col>
                                    <Col sm={8}>
                                        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                                            <ReactFlow
                                                nodes={nodes}
                                                edges={edges}
                                                onNodesChange={onNodesChange}
                                                onEdgesChange={onEdgesChange}
                                                onConnect={onConnect}
                                                onInit={setReactFlowInstance}
                                                onDrop={onDrop}
                                                onDragOver={onDragOver}
                                                fitView
                                            >
                                                <Controls />
                                            </ReactFlow>
                                        </div>
                                    </Col>
                                </Row>
                            </ReactFlowProvider>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <ViewCodePopup show={show} setShow={setShow} NavData={FloorPlanCustomCodeData} />
        </>
    );
};

export { CustomCode }
