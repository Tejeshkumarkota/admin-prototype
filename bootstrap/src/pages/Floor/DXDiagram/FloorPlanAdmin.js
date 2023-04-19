import React, { useCallback } from 'react';
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
import './components/overview.css';

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

  return (
    <>
        <div className='row'>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-12'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export {FloorPlanAdmin}