import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import { nodes as initialNodes, edges as initialEdges } from './components/initial-elements';
import CustomNode from './components/CustomNode';
import 'reactflow/dist/style.css';
import { Row, Col, Card } from 'react-bootstrap';
import ViewCodePopup from "../../Components/ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../../Components/ViewCodeButton/ViewCodeButton";
import { FloorPlanAdminData } from '../../ViewCodeData/ViewCodeData';

const nodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

const FloorPlanAdmin = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }
    return edge;
  });

  const [show, setShow] = useState(false);

  return (
    <>
      <Row className="mb-4">
        <Col><h4 className="fw-boldest text-black mb-0">Floor Plan Admin</h4></Col>
        <Col className="text-end">
          <ViewCodeButton show={show} setShow={setShow} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <ReactFlow
                    nodes={nodes}
                    edges={edgesWithUpdatedTypes}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onInit={onInit}
                    fitView
                    attributionPosition="top-right"
                    nodeTypes={nodeTypes}
                  >
                    <MiniMap style={minimapStyle} zoomable pannable />
                    <Controls />
                    <Background color="#aaa" gap={16} />
                  </ReactFlow>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ViewCodePopup show={show} setShow={setShow} NavData={FloorPlanAdminData} />
    </>
  );
};

export { FloorPlanAdmin }