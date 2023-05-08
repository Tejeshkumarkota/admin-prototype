export const ChartData = [
    {
      title: "Pie Chart",
      imports: `
        import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
        import { Pie } from "react-chartjs-2";
      `,
      show_content: `
      ChartJS.register(ArcElement, Tooltip, Legend);

      const data = {
        labels: ["Dubai", "Asia", "Europe",],
        datasets: [
          {
            data: [12, 19, 3,],
            backgroundColor: [
              "#5c72fe",
              "#ff0058",
              "#00d4d4"
            ],
            borderColor: [
              "#fff",
              "#fff",
              "#fff"
            ],
            borderWidth: 3,
          },
        ],
      };
      const options = {
        legend: {
          "position": "bottom",
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        offset: true,
      };
    
      <Pie data={data} options={options} height={300} />
      `,
    },

    {
      title: "Doughnut Chart",
      imports: `
        import React, { useState } from "react";
        import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
        import { Doughnut } from "react-chartjs-2";
      `,
      show_content: `
        ChartJS.register(ArcElement, Tooltip, Legend);
        const data = {
            labels: ["Dubai", "Asia", "Europe",],
            datasets: [
            {
                data: [12, 19, 3,],
                backgroundColor: [
                "#5c72fe",
                "#ff0058",
                "#00d4d4"
                ],
                borderColor: [
                "#fff",
                "#fff",
                "#fff"
                ],
                borderWidth: 3,
            },
            ],
        };
        const options = {
            legend: {
            "position": "bottom",
            display: false,
            },
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            offset: true,
        };

        <Doughnut data={data} options={options} height={300} />
        <div className="inner-text">
            <h5 className="font-12 text-primary fw-boldest">
                <span className="text-dark">Total</span> <br /> 0
            </h5>
        </div>
      `,
    },

    {
        title: "Bar Chart",
        imports: `
            import React, { useState } from "react";
            import {
            Chart as ChartJS,
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend,
            } from "chart.js";
            import { Bar } from "react-chartjs-2";
        `,
        show_content: `
        ChartJS.register(
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend
          );
        
          const options = {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                //text: "Chart.js Bar Chart",
              },
            },
          };
          const labels = ["January", "February", "March", "April", "May", "June", "July",];
          const data = {
            labels,
            datasets: [
              {
                datalabels: {
                  color: "#EAEFF5",
                  font: {
                    size: 16,
                    family: "'Poppins', sans-serif",
                    lineHeight: 0.5,
                  },
                },
                label: "In-Progress",
                data: [40, 60, 40, 60, 40, 60],
                backgroundColor: "#002C6A",
                barThickness: 45,
                maxBarThickness: 45,
                borderRadius: {
                  bottomRight: 5,
                  bottomLeft: 5,
                  topRight: 5,
                  topLeft: 5,
                },
              },
              {
                datalabels: {
                  color: "#EAEFF5",
                  font: {
                    size: 16,
                    family: "'Poppins', sans-serif",
                    lineHeight: 0.5,
                  },
                },
                label: "Whole",
                data: [100, 80, 100, 80, 100, 80],
                backgroundColor: "#EAEFF5",
                barThickness: 45,
                maxBarThickness: 45,
                borderRadius: {
                  bottomRight: 0,
                  bottomLeft: 0,
                  topRight: 5,
                  topLeft: 5,
                },
              },
            ],
          };

          <Bar options={options} data={data} />
        `,
    },

    {
    title: "Mixed bar chart",
    imports: `
        import React, { useState } from "react";
        import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        } from "chart.js";
        import { Line } from "react-chartjs-2";
    `,
    show_content: `
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
        );
    
        const options = {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
            display: true,
            //text: "Chart.js Line Chart - Multi Axis",
            },
        },
        scales: {
            y: {
            type: "linear",
            display: true,
            position: "left",
            },
            y1: {
            type: "linear",
            display: true,
            position: "right",
            grid: {
                drawOnChartArea: false,
            },
            },
        },
        };

    const labels = ["January", "February", "March", "April", "May", "June", "July",];

    const data = {
        labels,
        datasets: [
        {
            label: "Dataset 1",
            data: [140, 100, 160, 100, 140, 100,],
            borderColor: "#ff0058",
            backgroundColor: "#ff0058",
            yAxisID: "y",
        },
        {
            label: "Dataset 2",
            data: [160, 200, 140, 100, 160, 200,],
            borderColor: "#00d4d4",
            backgroundColor: "#00d4d4",
            yAxisID: "y1",
        },
        ],
    };

    <Line options={options} data={data} />
    `,
    },

    {
    title: "Stacked Bar Chart",
    imports: `
    import React, { useState } from "react";
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
        } from 'chart.js';
        import { Bar } from 'react-chartjs-2';
    `,
    show_content: `
        ChartJS.register(
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend
        );
        
        const options = {
            plugins: {
            title: {
                display: true,
                ///text: 'Chart.js Bar Chart - Stacked',
            },
            },
            responsive: true,
            scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
            },
        };
        
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        
        const data = {
            labels,
            datasets: [
            {
                label: 'Dataset 1',
                data: [100, 80, 100, 80, 100, 80],
                backgroundColor: '#00d4d4',
            },
            {
                label: 'Dataset 2',
                data: [40, 60, 40, 60, 40, 60],
                backgroundColor: '#ff0058',
            },
            {
                label: 'Dataset 3',
                data: [100, 20, 100, 30, 100, 40],
                backgroundColor: '#5c72fe',
            },
            ],
        };

        <Bar options={options} data={data} />        
    `,
    },
    {
        title: "Grouped Bar Chart",
        imports: `
        import React, { useState } from "react";
        import {
            Chart as ChartJS,
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend,
          } from 'chart.js';
          import { Bar } from 'react-chartjs-2';
        `,
        show_content: `
        ChartJS.register(
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend
        );
    
        const options = {
            plugins: {
              title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked',
              },
            },
            responsive: true,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
        };
    
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
        const data = {
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: [40, 60, 40, 60, 40, 60],
                backgroundColor: 'rgb(255, 99, 132)',
                stack: 'Stack 0',
              },
              {
                label: 'Dataset 2',
                data: [100, 80, 100, 80, 100, 80],
                backgroundColor: 'rgb(75, 192, 192)',
                stack: 'Stack 0',
              },
              {
                label: 'Dataset 3',
                data: [100, 60, 70, 30, 800, 10],
                backgroundColor: 'rgb(53, 162, 235)',
                stack: 'Stack 1',
              },
            ],
          };

          <Bar options={options} data={data} />
        `,
    },
];

export const GanttChartData = [
  {
    title: "Gantt Chart",
    imports: `
      import React, { useState } from "react";
      import { Gantt, Task, ViewMode } from "gantt-task-react";
      import "gantt-task-react/dist/index.css";
      import { ViewSwitcher } from "./components/view-switcher";
      import { getStartEndDateForProject, initTasks } from "./components/Helper.jsx";
    `,
    show_content: `
      const [view, setView] = useState(ViewMode.Day);
      const [tasks, setTasks] = useState(initTasks());
      const [isChecked, setIsChecked] = useState(true);
      let columnWidth = 65;
      if (view === ViewMode.Month) {
          columnWidth = 300;
      } else if (view === ViewMode.Week) {
          columnWidth = 250;
      }

      const handleTaskChange = (task) => {
          console.log("On date change Id:" + task.id);
          let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
          if (task.project) {
            const [start, end] = getStartEndDateForProject(newTasks, task.project);
            const project =
              newTasks[newTasks.findIndex((t) => t.id === task.project)];
            if (
              project.start.getTime() !== start.getTime() ||
              project.end.getTime() !== end.getTime()
            ) {
              const changedProject = { ...project, start, end };
              newTasks = newTasks.map((t) =>
                t.id === task.project ? changedProject : t
              );
            }
          }
          setTasks(newTasks);
        };
      
        const handleTaskDelete = (task) => {
          const conf = window.confirm("Are you sure about " + task.name + " ?");
          if (conf) {
            setTasks(tasks.filter((t) => t.id !== task.id));
          }
          return conf;
        };
      
        const handleProgressChange = async (task) => {
          setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
          console.log("On progress change Id:" + task.id);
        };
      
        const handleDblClick = (task) => {
          alert("On Double Click event Id:" + task.id);
        };
      
        const handleSelect = (task, isSelected) => {
          console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
        };
      
        const handleExpanderClick = (task) => {
          setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
          console.log("On expander click Id:" + task.id);
        };

      <ViewSwitcher
          onViewModeChange={(viewMode) => setView(viewMode)}
          onViewListChange={setIsChecked}
          isChecked={isChecked}
      />
      <h5>Gantt With Unlimited Height</h5>
      <Gantt
          tasks={tasks}
          viewMode={view}
          onDateChange={handleTaskChange}
          onDelete={handleTaskDelete}
          onProgressChange={handleProgressChange}
          onDoubleClick={handleDblClick}
          onSelect={handleSelect}
          onExpanderClick={handleExpanderClick}
          listCellWidth={isChecked ? "155px" : ""}
          columnWidth={columnWidth}
      />
    `,
  },
  {
      title: "view-switcher",
      imports: `
      import "gantt-task-react/dist/index.css"
      import React from "react"
      import { ViewMode } from "gantt-task-react"
      `,
      show_content: `
      export const ViewSwitcher = ({ onViewModeChange, onViewListChange, isChecked }) => {
          return (
            <div className='ViewContainer'>
              <button className='Button' onClick={() => onViewModeChange(ViewMode.Hour)}>
                Hour
              </button>
              <button className='Button' onClick={() => onViewModeChange(ViewMode.QuarterDay)}>
                Quarter of Day
              </button>
              <button className='Button' onClick={() => onViewModeChange(ViewMode.HalfDay)}>
                Half of Day
              </button>
              <button className='Button' onClick={() => onViewModeChange(ViewMode.Day)}>
                Day
              </button>
              <button className='Button' onClick={() => onViewModeChange(ViewMode.Week)}>
                Week
              </button>
              <button className='Button' onClick={() => onViewModeChange(ViewMode.Month)}>
                Month
              </button>
        
              <div className='Switch'>
                <label className='Switch_Toggle'>
                  <input
                    type='checkbox'
                    defaultChecked={isChecked}
                    onClick={() => onViewListChange(!isChecked)}
                  />
                  <span className='Slider' />
                </label>
                Show Task List
              </div>
            </div>
          )
      }
      `,
  },
  {
      title: "Helper.jsx",
      imports: ` `,
      show_content: `
      export function initTasks() {
      const currentDate = new Date()
      const tasks = [
          {
          start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
          end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
          name: "Some Project",
          id: "ProjectSample",
          progress: 25,
          type: "project",
          hideChildren: false,
          displayOrder: 1,
          },
          {
          start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
          end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2, 12, 28),
          name: "Idea",
          id: "Task 0",
          progress: 45,
          type: "task",
          project: "ProjectSample",
          displayOrder: 2,
          },
          {
          start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
          end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
          name: "Research",
          id: "Task 1",
          progress: 25,
          dependencies: ["Task 0"],
          type: "task",
          project: "ProjectSample",
          displayOrder: 3,
          },
          {
          start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
          end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
          name: "Discussion with team",
          id: "Task 2",
          progress: 10,
          dependencies: ["Task 1"],
          type: "task",
          project: "ProjectSample",
          displayOrder: 4,
          },
          {
          start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
          end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
          name: "Developing",
          id: "Task 3",
          progress: 2,
          dependencies: ["Task 2"],
          type: "task",
          project: "ProjectSample",
          displayOrder: 5,
          },
          {
          start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
          end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
          name: "Review",
          id: "Task 4",
          type: "task",
          progress: 70,
          dependencies: ["Task 2"],
          project: "ProjectSample",
          displayOrder: 6,
          },
          {
          start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
          end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
          name: "Release",
          id: "Task 6",
          progress: currentDate.getMonth(),
          type: "milestone",
          dependencies: ["Task 4"],
          project: "ProjectSample",
          displayOrder: 7,
          },
          {
          start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
          end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
          name: "Party Time",
          id: "Task 9",
          progress: 0,
          isDisabled: true,
          type: "task",
          },
      ]
      return tasks
      }
        
      export function getStartEndDateForProject(tasks, projectId) {
          const projectTasks = tasks.filter((t) => t.project === projectId)
          let start = projectTasks[0].start
          let end = projectTasks[0].end
          
          for (let i = 0; i < projectTasks.length; i++) {
              const task = projectTasks[i]
              if (start.getTime() > task.start.getTime()) {
              start = task.start
              }
              if (end.getTime() < task.end.getTime()) {
              end = task.end
              }
          }
          return [start, end]
      }  
      `,
  },
];

export const DxSchedularData = [
  {
    title: "Dx Schedular",
    imports: `
    import React, { useState } from "react";
    import { Row, Col, Card } from 'react-bootstrap';
    import { Scheduler } from "@aldabil/react-scheduler";
    import { EVENTS } from "./components/events";
    import { Buttons } from "./components/buttons";
    `,
    show_content: `
      <Row>
          <Col sm={4} lg={3}> <Buttons /> </Col>
          <Col sm={8} lg={9}> <Scheduler events={EVENTS} /> </Col>
      </Row>
    `,
  },
  {
      title: "Events",
      imports: ` `,
      show_content: `
      export const EVENTS = [
          {
            event_id: 1,
            title: "Event 1",
            start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
            end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
            disabled: true,
            admin_id: [1, 2, 3, 4]
          },
          {
            event_id: 2,
            title: "Event 2",
            start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
            end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
            admin_id: 2,
            color: "#50b500"
          },
          {
            event_id: 3,
            title: "Event 3",
            start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
            end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
            admin_id: 1,
            editable: false,
            deletable: false
          },
          {
            event_id: 4,
            title: "Event 4",
            start: new Date(
              new Date(new Date(new Date().setHours(9)).setMinutes(30)).setDate(
                new Date().getDate() - 2
              )
            ),
            end: new Date(
              new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
                new Date().getDate() - 2
              )
            ),
            admin_id: 2,
            color: "#900000"
          },
          {
            event_id: 5,
            title: "Event 5",
            start: new Date(
              new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
                new Date().getDate() - 2
              )
            ),
            end: new Date(
              new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
                new Date().getDate() - 2
              )
            ),
            admin_id: 2,
            editable: true
          },
          {
            event_id: 6,
            title: "Event 6",
            start: new Date(
              new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
                new Date().getDate() - 4
              )
            ),
            end: new Date(new Date(new Date().setHours(14)).setMinutes(0)),
            admin_id: 2
          }
        ];          
      `,
  },
  {
      title: "Buttons",
      imports: `
      import Button from 'react-bootstrap/Button';
      `,
      show_content: `
      <>
          <Button className="w-100 mb-3 text-start font-14" variant="primary">New Brochures</Button>
          <Button className="w-100 mb-3 text-start font-14" variant="secondary">Brochure Design Review</Button>
          <Button className="w-100 mb-3 text-start font-14" variant="success">Upgrade Personal Computers</Button>
          <Button className="w-100 mb-3 text-start font-14" variant="warning">Install New Router in Dev Room</Button>
          <Button className="w-100 mb-3 text-start font-14" variant="danger">Upgrade Server Hardware</Button>
          <Button className="w-100 mb-3 text-start font-14" variant="info">Install New Database</Button>
      </>
      `,
  },
];

export const FloorPlanCustomCodeData = [
  {
      title: "Floor Plan Custom Code",
      imports: `
      import React, { useState, useRef, useCallback } from 'react';
      import ReactFlow, { ReactFlowProvider, addEdge, useNodesState, useEdgesState, Controls, } from 'reactflow';
      import 'reactflow/dist/style.css';
      import Sidebar from './Components/Sidebar';`,
      show_content: `
      // Befor Function //
      const initialNodes = [
          {
              id: '1',
              type: 'input',
              data: { label: 'input node' },
              position: { x: 250, y: 5 },
          },
      ];
      
      let id = 0;
      const getId = () =>  ;

      //inside Function //

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
                  data: { label: },
              };

              setNodes((nds) => nds.concat(newNode));
          },
          [reactFlowInstance]
      );

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
      The official website: https://reactflow.dev/docs/examples/interaction/drag-and-drop/
      `,
  },
  {
      title: "Sidebar",
      imports: ` `,
      show_content: `
      const onDragStart = (event, nodeType) => {
          event.dataTransfer.setData('application/reactflow', nodeType);
          event.dataTransfer.effectAllowed = 'move';
        };

      <aside>
        <div className="description">Category</div>
        <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
          Input Node
        </div>
        <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
          Default Node
        </div>
        <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
          Output Node
        </div>
      </aside>
      `,
  },
];

export const FloorPlanAdminData = [
  {
      title: "Floor Plan Admin",
      imports: `
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
      `,
      show_content: `
      //Before Function //

      const nodeTypes = {
          custom: CustomNode,
        };
        
        const minimapStyle = {
          height: 120,
        };
        
        const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

        //Inside Function //

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
      `,
  },
  {
      title: "initial-elements",
      imports: `
      import React from 'react';
      import { MarkerType, Position } from 'reactflow'; `,
      show_content: `
      export const nodes = [
          {
            id: '1',
            type: 'input',
            data: {
              label: 'Input Node',
            },
            position: { x: 250, y: 0 },
          },
          {
            id: '2',
            data: {
              label: 'Default Node',
            },
            position: { x: 100, y: 100 },
          },
          {
            id: '3',
            type: 'output',
            data: {
              label: 'Output Node',
            },
            position: { x: 400, y: 100 },
          },
          {
            id: '4',
            type: 'custom',
            position: { x: 100, y: 200 },
            data: {
              selects: {
                'handle-0': 'smoothstep',
                'handle-1': 'smoothstep',
              },
            },
          },
          {
            id: '5',
            type: 'output',
            data: {
              label: 'custom style',
            },
            className: 'circle',
            style: {
              background: '#2B6CB0',
              color: 'white',
            },
            position: { x: 400, y: 200 },
            sourcePosition: Position.Right,
            targetPosition: Position.Left,
          },
          {
            id: '6',
            type: 'output',
            style: {
              background: '#63B3ED',
              color: 'white',
              width: 100,
            },
            data: {
              label: 'Node',
            },
            position: { x: 400, y: 325 },
            sourcePosition: Position.Right,
            targetPosition: Position.Left,
          },
          {
            id: '7',
            type: 'default',
            className: 'annotation',
            data: {
              label: (
                <>
                  On the bottom left you see the <strong>Controls</strong> and the bottom right the{' '}
                  <strong>MiniMap</strong>. This is also just a node 🥳
                </>
              ),
            },
            draggable: false,
            selectable: false,
            position: { x: 150, y: 400 },
          },
        ];
        
        export const edges = [
          { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
          { id: 'e1-3', source: '1', target: '3', animated: true },
          {
            id: 'e4-5',
            source: '4',
            target: '5',
            type: 'smoothstep',
            sourceHandle: 'handle-0',
            data: {
              selectIndex: 0,
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
            },
          },
          {
            id: 'e4-6',
            source: '4',
            target: '6',
            type: 'smoothstep',
            sourceHandle: 'handle-1',
            data: {
              selectIndex: 1,
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
            },
          },
      ];
      `,
  },
  {
      title: "CustomNode",
      imports: `
      import React, { memo } from 'react';
      import { Handle, useReactFlow, useStoreApi, Position } from 'reactflow';`,
      show_content: `
      const options = [
          {
            value: 'smoothstep',
            label: 'Smoothstep',
          },
          {
            value: 'step',
            label: 'Step',
          },
          {
            value: 'default',
            label: 'Bezier (default)',
          },
          {
            value: 'straight',
            label: 'Straight',
          },
        ];

      function Select({ value, handleId, nodeId }) {
          const { setNodes } = useReactFlow();
          const store = useStoreApi();
          
          const onChange = (evt) => {
              const { nodeInternals } = store.getState();
              setNodes(
              Array.from(nodeInternals.values()).map((node) => {
                  if (node.id === nodeId) {
                  node.data = {
                      ...node.data,
                      selects: {
                      ...node.data.selects,
                      [handleId]: evt.target.value,
                      },
                  };
                  }
          
                  return node;
              })
              );
          };
          
          return (
              <div className="custom-node__select">
              <div>Edge Type</div>
              <select className="nodrag" onChange={onChange} value={value}>
                  {options.map((option) => (
                  <option key={option.value} value={option.value}>
                      {option.label}
                  </option>
                  ))}
              </select>
              <Handle type="source" position={Position.Right} id={handleId} />
              </div>
          );
      }

      function CustomNode({ id, data }) {
          return (
            <>
              <div className="custom-node__header">
                This is a <strong>custom node</strong>
              </div>
              <div className="custom-node__body">
                {Object.keys(data.selects).map((handleId) => (
                  <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} />
                ))}
              </div>
            </>
          );
        }
        
      export default memo(CustomNode);            
      `,
  },
];

// Modal Popup Component
export const ModalPopupViewSource = [
  {
    title: "Bootstrap Modal",
    imports: `
    import { Modal, Button } from "react-bootstrap" 
    import { useState } from "react";`,
    show_content: `
    const [show, setShow] = useState(false);
    const handleShowClose = () => setShow(!show);
    
    <Button 
      onClick={handleShowClose} 
      variant="primary" 
      type="button" 
      className="text-uppercase font-12 py-2 px-4 d-inline-block rounded"
    >
        Bootstrap Modal
    </Button>

    <Modal 
      size="lg" 
      show={show} 
      className='custom-modal' 
      onHide={handleShowClose}
    >
        <Modal.Header closeButton>
            <Modal.Title>Bootstrap Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Modal.Body>
        <Modal.Footer>
            <Button 
              variant="outline-primary" 
              className='text-uppercase font-12 d-inline-block py-2 px-4 rounded' 
              onClick={handleShowClose}
            >
                Cancel
            </Button>
            <Button 
              variant="primary" 
              className='text-uppercase font-12 py-2 px-4 d-inline-block rounded ms-2' 
              onClick={handleShowClose}
            >
                Save
            </Button>
        </Modal.Footer>
    </Modal>`,
  },
];

// Alert Component
export const AlertViewSource=[
  {
    title:'Alert Primary',
    imports: `
    import Alert from "react-bootstrap/Alert" 
    import { useState } from "react";`,
    show_content:`
    const [show, setShow] = useState(false);

    <Alert
      variant="primary"
      onClose={() => setShow(false)}
      dismissible
    >
      <p className="mb-0 font-14">
        Change this and that and try again. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia
        odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
      </p>
    </Alert>`
  },
  {
    title:'Alert Secondary',
    imports: `
    import Alert from "react-bootstrap/Alert" 
    import { useState } from "react";`,
    show_content:`
    const [show, setShow] = useState(false);
    
    <Alert
      variant="secondary"
      onClose={() => setShow(false)}
      dismissible
    >
      <p className="mb-0 font-14">
        Change this and that and try again. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia
        odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
      </p>
    </Alert>`
  },
  {
    title:'Alert Success',
    imports: `
    import Alert from "react-bootstrap/Alert" 
    import { useState } from "react";`,
    show_content:`
    const [show, setShow] = useState(false);
    
    <Alert
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <p className="mb-0 font-14">
        Change this and that and try again. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia
        odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
      </p>
    </Alert>`
  },
  {
    title:'Alert Danger',
    imports: `
    import Alert from "react-bootstrap/Alert" 
    import { useState } from "react";`,
    show_content:`
    const [show, setShow] = useState(false);
    
    <Alert
      variant="danger"
      onClose={() => setShow(false)}
      dismissible
    >
      <p className="mb-0 font-14">
        Change this and that and try again. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia
        odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
      </p>
    </Alert>`
  },
  {
    title:'Alert Warning',
    imports: `
    import Alert from "react-bootstrap/Alert" 
    import { useState } from "react";`,
    show_content:`
    const [show, setShow] = useState(false);
    
    <Alert
      variant="warning"
      onClose={() => setShow(false)}
      dismissible
    >
      <p className="mb-0 font-14">
        Change this and that and try again. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia
        odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
      </p>
    </Alert>`
  },
  {
    title:'Alert Info',
    imports: `
    import Alert from "react-bootstrap/Alert" 
    import { useState } from "react";`,
    show_content:`
    const [show, setShow] = useState(false);
    
    <Alert
      variant="info"
      onClose={() => setShow(false)}
      dismissible
    >
      <p className="mb-0 font-14">
        Change this and that and try again. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia
        odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
      </p>
    </Alert>`
  },
  {
    title:'Alert Light',
    imports: `
    import Alert from "react-bootstrap/Alert" 
    import { useState } from "react";`,
    show_content:`
    const [show, setShow] = useState(false);
    
    <Alert
      variant="light"
      onClose={() => setShow(false)}
      dismissible
    >
      <p className="mb-0 font-14">
        Change this and that and try again. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia
        odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
      </p>
    </Alert>`
  },
  {
    title:'Alert Dark',
    imports: `
    import Alert from "react-bootstrap/Alert" 
    import { useState } from "react";`,
    show_content:`
    const [show, setShow] = useState(false);
    
    <Alert
      variant="dark"
      onClose={() => setShow(false)}
      dismissible
    >
      <p className="mb-0 font-14">
        Change this and that and try again. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia
        odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
      </p>
    </Alert>`
  }
];

// Accordion Component
export const AccordionViewSource=[
  {
    title:'Accordion Using Arrow',
    imports: `
    import { Card, Accordion } from "react-bootstrap"`,
    show_content:`
    <Card>
      <Card.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>`
  },
  {
    title:'Accordion Using Plus',
    imports: `
    import { Card, Accordion } from "react-bootstrap"`,
    show_content:`
    <Card>
      <Card.Body>
        <Accordion className="plus_accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>`
  }
];

// Card Component
export const CardViewSource = [
  {
    title: "Card",
    imports: `
    import { Row, Col, Card, Button } from "react-bootstrap";`,
    show_content: `
    <Row>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card>
          <Card.Img 
              variant="top" 
              src="https://www.nobleui.com/html/template/assets/images/others/placeholder.jpg" 
              alt="Card Image"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" className="text-uppercase font-12 py-2 px-4 rounded d-block">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card>
          <Card.Img 
              variant="top" 
              src="https://www.nobleui.com/html/template/assets/images/others/placeholder.jpg" 
              alt="Card Image"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" className="text-uppercase font-12 py-2 px-4 rounded d-block">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card>
          <Card.Img 
              variant="top" 
              src="https://www.nobleui.com/html/template/assets/images/others/placeholder.jpg" 
              alt="Card Image"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" className="text-uppercase font-12 py-2 px-4 rounded d-block">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card>
          <Card.Img 
              variant="top" 
              src="https://www.nobleui.com/html/template/assets/images/others/placeholder.jpg" 
              alt="Card Image"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary" className="text-uppercase font-12 py-2 px-4 rounded d-block">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>`,
  },
];

// Full Calendar
export const FullCalendarData = [
  {
    title: "CalendarWrapper.js",
    imports: `
    import React, { useEffect, useState, useRef } from "react";
    import { Row, Col, Card } from 'react-bootstrap';
    import FullCalendar from "@fullcalendar/react";
    import dayGridPlugin from "@fullcalendar/daygrid";
    import timeGridPlugin from "@fullcalendar/timegrid";
    import listPlugin from '@fullcalendar/list';
    import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
    import events from './Components/events'; `,
    show_content: `
    const [state, setState] = useState({
      weekendsVisible: true,
      initialView: 'listWeek',
      externalEvents: [
          { title: "Art 1", color: "#0097a7", id: 34432, custom: "fdsfdsfds" },
          { title: "Art 2", color: "#f44336", id: 323232 },
          { title: "Art 3", color: "#f57f17", id: 1111 },
          { title: "Art 4", color: "#90a4ae", id: 432432 }
      ],
      calendarEvents: [
          {
              id: 1,
              title: "All-day event",
              color: "#388e3c",
              start: "2020-12-12",
              end: "2020-12-12",
              custom: "questo è un campo custom"
          },
          {
              id: 2,
              title: "Timed event",
              color: "#0097a7",
              start: "2020-12-07",
              end: "2020-12-10",
              custom: "custom stuff"
          }
      ]
    });

    // load external events
    useEffect(() => {
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function (eventEl) {
                let id = eventEl.dataset.id;
                let title = eventEl.getAttribute("title");
                let color = eventEl.dataset.color;
                let custom = eventEl.dataset.custom;

                return {
                    id: id,
                    title: title,
                    color: color,
                    custom: custom,
                    create: true
                };
            }
        });
    });

    // add external events
    const addEvent = () => {
        let newEvent = {
            id: 3433,
            title: "Timed event",
            color: "#333333",
            start: "2020-12-31",
            end: "2020-12-31",
            custom: "custom stuff"
        };

        setState((state) => {
            return {
                ...state,
                externalEvents: state.externalEvents.concat(newEvent)
            };
        });
    };

    // handle event receive
    const handleEventReceive = (eventInfo) => {
        const newEvent = {
            id: eventInfo.draggedEl.getAttribute("data-id"),
            title: eventInfo.draggedEl.getAttribute("title"),
            color: eventInfo.draggedEl.getAttribute("data-color"),
            start: eventInfo.date,
            end: eventInfo.date,
            custom: eventInfo.draggedEl.getAttribute("data-custom")
        };

        setState((state) => {
            return {
                ...state,
                calendarEvents: state.calendarEvents.concat(newEvent)
            };
        });
    };

    // return
    <Row>
      <Col sm={4} md={3}>
          <Card>
              <Card.Body>
                <Row>
                  <Col sm={12}>
                      <h5 className="border-bottom pb-2 mb-4">Full calendar</h5>
                      <h6 className="mb-3 text-muted">Draggable Events</h6>
                  </Col>
                  <Col id="external-events" sm={12}>
                      {state.externalEvents.map((event) => (
                          <div
                              className="fc-event fc-h-event mb-1 fc-daygrid-event fc-daygrid-block-event p-2"
                              title={event.title}
                              data-id={event.id}
                              data-color={event.color}
                              data-custom={event.custom}
                              key={event.id}
                              style={{
                                  backgroundColor: event.color,
                                  borderColor: event.color,
                                  cursor: "pointer"
                              }}
                          >
                              <div className="fc-event-main">
                                  <div>
                                      <strong>{event.title}</strong>
                                  </div>
                                  {event.custom}
                              </div>
                          </div>
                      ))}
                  </Col>
                </Row>
              </Card.Body>
          </Card>
      </Col>
      <Col sm={8} md={9}>
          <Card>
              <Card.Body>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    headerToolbar={{
                        left: "prev,today,next",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={state.weekendsVisible}
                    events={events}
                    droppable={true}
                    calendarEvents={state.calendarEvents}
                    eventReceive={handleEventReceive}
                />
              </Card.Body>
          </Card>
      </Col>
  </Row> `,
  },
  {
    title: "events.js",
    imports: ` `,
    show_content: `
    const events = [
      { title: "AZUL +6", start: getDate("YEAR-MONTH-02") },
      { title: "AZUL +7", start: getDate("YEAR-MONTH-03") },
      {
        title: "VERDE +10",
        start: getDate("YEAR-MONTH-06"),
        backgroundColor: "green",
        textColor: "white"
      },
      { title: "AMARILLO -5", start: getDate("YEAR-MONTH-07") },
      { title: "AZUL +5", start: getDate("YEAR-MONTH-08"),  },
      {
        title: "AMARILLO -5",
        start: getDate("YEAR-MONTH-09"),
        backgroundColor: "yellow",
        textColor: "black"
      },
      {
        title: "LECTURA +20",
        start: getDate("YEAR-MONTH-09"),
        backgroundColor: "purple"
      },
    
      { title: "AZUL +5", start: getDate("YEAR-MONTH-28") },
      {
        title: "AZUL +5",
        start: getDate("YEAR-MONTH-22"),
        backgroundColor: "red",
        textColor: "white"
      },
      {
        start: getDate("YEAR-MONTH-23"),
        end: getDate("YEAR-MONTH-24"),
        allDay: true
      }
    ];
    
    function getDate(dayString) {
      const today = new Date();
      const year = today.getFullYear().toString();
      let month = (today.getMonth() + 1).toString();
    
      if (month.length === 1) {
        month = "0" + month;
      }
    
      return dayString.replace("YEAR", year).replace("MONTH", month);
    }
    
    export default events; `,
  },
];

// Collapse Component
export const CollapseViewSource = [
  {
    title: "Collapse",
    imports: `
    import { useState } from "react";
    import { Row, Col, Card, Button, Collapse, Nav } from "react-bootstrap";`,
    show_content: `
    const [open, setOpen] = useState(false);
    
    <Card>
      <Card.Body>        
        <div className="d-flex">
          <Nav.Link
            href="#"
            onClick={(event) => {
              event.preventDefault()
              setOpen(!open)
            }}
            aria-controls="link-with-href"
            aria-expanded={open}
            className="mb-3 btn btn-primary text-white me-4"
          >
            Link with href
          </Nav.Link>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="link-with-href"
            aria-expanded={open}
            className="mb-3"
          >
            Button with data-bs-target
          </Button>
        </div>
        <Collapse in={open}>
          <div id="link-with-href">
            <Card>
              <Card.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </Card.Body>
            </Card>
          </div>
        </Collapse>
      </Card.Body>
    </Card>`,
  },
];

// Dropdown Component
export const DropdownViewSource = [
  {
    title: "Dropdown",
    imports: `
    import { useState } from "react";
    import { Row, Col, Card, Dropdown, DropdownButton } from "react-bootstrap";`,
    show_content: `
    const list = [
      { key: "Dropdown text change", value: "Dropdown text change" },
      { key: "Yellow", value: "yellow" },
      { key: "Blue", value: "blue" },
      { key: "Green", value: "green" }
    ];

    const [selected, setSelected] = useState({});
    const handleSelect = (key, event) => {
        setSelected({ key, value: event.target.value });
    };
    
    <Card>
      <Card.Body>
          <div className="d-flex">
              <Dropdown className="me-4">
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Dropdown Button
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>

              <DropdownButton
                  id="dropdown-text-change"
                  variant="primary"
                  className="floatRight"
                  onSelect={handleSelect}
                  title={selected?.key || list[0].key}
              >
                  {list.map((item, index) => {
                      return (
                          <Dropdown.Item key={index} eventKey={item.key}>
                              {item.value}
                          </Dropdown.Item>
                      );
                  })}
              </DropdownButton>
          </div>
      </Card.Body>
    </Card>`,
  },
];

// ListGroup Component
export const ListGroupViewSource = [
  {
    title: "List Group",
    imports: `
    import { useState } from "react";
    import { Row, Col, Card, ListGroup } from "react-bootstrap";`,
    show_content: `       
    <Card>
      <Card.Body>
          <ListGroup as="ul">
              <ListGroup.Item as="li" active> An active item </ListGroup.Item>
              <ListGroup.Item as="li">A second item</ListGroup.Item>
              <ListGroup.Item as="li" disabled> A third item </ListGroup.Item>
              <ListGroup.Item as="li">A fourth item</ListGroup.Item>
          </ListGroup>
      </Card.Body>
    </Card>`,
  },
];

// ListGroup Component
export const OffCanvasViewSource = [
  {
    title: "Off Canvas",
    imports: `
    import { useState } from "react";
    import { Row, Col, Card, Button, Nav } from "react-bootstrap";
    import Offcanvas from 'react-bootstrap/Offcanvas';`,
    show_content: `       
    <Card>
      <Card.Body>
          <div className="d-flex">
              <Nav.Link
                  href="#"
                  onClick={handleShow}
                  className="btn btn-primary text-white me-4 text-uppercase font-12"
                  variant="primary"
              >
                  Link with href
              </Nav.Link>
              <Button variant="primary" onClick={handleShow} className="text-uppercase font-12">
                  Button with data-bs-target
              </Button>
          </div>

          <Offcanvas show={visible} onHide={handleClose} backdrop="static">
              <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  I will not close if you click outside of me.
              </Offcanvas.Body>
          </Offcanvas>
      </Card.Body>
    </Card>`,
  },
];

// Scrollspy Component
export const ScrollspyViewSource = [
  {
    title: "Scrollspy",
    imports: `
    import { useState } from "react";
    import { Row, Col, Card, ListGroup } from "react-bootstrap";
    import Scrollspy from 'react-scrollspy'`,
    show_content: `       
    <Card>
      <Card.Body>
          <Row>
              <Col xs={4} sm={4} md={4}>
                  <Scrollspy items={['section-1', 'section-2', 'section-3']} currentClassName="is-current" className="m-0 p-0">
                      <ListGroup defaultActiveKey="#section-1">
                          <ListGroup.Item action href="#section-1">
                              Item 1
                          </ListGroup.Item>
                          <ListGroup.Item action href="#section-2">
                              Item 2
                          </ListGroup.Item>
                          <ListGroup.Item action href="#section-3">
                              Item 3
                          </ListGroup.Item>
                      </ListGroup>
                  </Scrollspy>
              </Col>
              <Col xs={8} sm={8} md={8}>
                  <div className="scrollyspy-div">
                      <section id="section-1">
                          <h3>Item 1</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                              sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                      </section>
                      <section id="section-2">
                          <h3>Item 2</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                              sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                      </section>
                      <section id="section-3">
                          <h3>Item 3</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                              sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                      </section>
                  </div>
              </Col>
          </Row>
      </Card.Body>
    </Card>`,
  },
];

// Navs and tabs Component
export const NavsAndTabsData = [
  {
    title: "Navs and Tabs",
    imports: `
    import { useState } from "react";
    import { Row, Col, Card, Tab, Tabs, Nav } from "react-bootstrap";
    import { ScrollspyViewSource } from "../../ViewCodeData/ViewCodeData";
    import { Text } from './Componants/Text';`,
    show_content: `       
    <Card>
      <Card.Body>
          <Row>
              <Col sm={12} className="mb-5">
                  <p className="fw-medium font-16 mb-4">Tabs</p>
                  <Tabs
                      id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                      className="mb-3"
                  >
                      <Tab eventKey="home" title="Home">
                          <Text />
                      </Tab>
                      <Tab eventKey="profile" title="Profile">
                          <Text />
                      </Tab>
                      <Tab eventKey="contact" title="Contact">
                          <Text />
                      </Tab>
                  </Tabs>
              </Col>
              <Col sm={12}>
                  <p className="fw-medium font-16 mb-4">Left Side Pills</p>
              </Col>
              <Col sm={12} className="mb-5">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                      <Row>
                          <Col sm={3}>
                              <Nav variant="pills" className="flex-column">
                                  <Nav.Item>
                                      <Nav.Link eventKey="first">Home</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                      <Nav.Link eventKey="second">Profile</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                      <Nav.Link eventKey="contact">Contact</Nav.Link>
                                  </Nav.Item>
                              </Nav>
                          </Col>
                          <Col sm={9}>
                              <Tab.Content>
                                  <Tab.Pane eventKey="first">
                                      <Text />
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="second">
                                      <Text />
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="contact">
                                      <Text />
                                  </Tab.Pane>
                              </Tab.Content>
                          </Col>
                      </Row>
                  </Tab.Container>
              </Col>
              <Col sm={12}>
                  <p className="fw-medium font-16 mb-4">Pills</p>
              </Col>
              <Col sm={12}>
                  <Tab.Container defaultActiveKey="first">
                      <Row>
                          <Col sm={12} className="mb-3">
                              <Nav variant="pills" className="d-flex">
                                  <Nav.Item>
                                      <Nav.Link eventKey="first">Home</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                      <Nav.Link eventKey="second">Profile</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                      <Nav.Link eventKey="contact">Contact</Nav.Link>
                                  </Nav.Item>
                              </Nav>
                          </Col>
                          <Col sm={12}>
                              <Tab.Content>
                                  <Tab.Pane eventKey="first">
                                      <Text />
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="second">
                                      <Text />
                                  </Tab.Pane>
                                  <Tab.Pane eventKey="contact">
                                      <Text />
                                  </Tab.Pane>
                              </Tab.Content>
                          </Col>
                      </Row>
                  </Tab.Container>
              </Col>
          </Row>
      </Card.Body>
    </Card>`,
  },
  {
    title: "Text",
    imports: `import React from 'react';`,
    show_content: `
    <>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </> `,
  },
];

// Pagination Component
export const PaginationData = [
  {
    title: "Pagination",
    imports: `import { useState } from "react";
    import { Row, Col, Card, Pagination } from "react-bootstrap";`,
    show_content: `
      let active = 2;
      let items = [];
      for (let number = 1; number <= 5; number++) {
          items.push(
              <Pagination.Item key={number} active={number === active}>
                  {number}
              </Pagination.Item>,
          );
      }

      <Card>
        <Card.Body>
            <Row>
                <Col sm={12}>
                    <Pagination>{items}</Pagination>
                    <br />

                    <Pagination size="lg">{items}</Pagination>
                    <br />

                    <Pagination size="sm" className="m-0">{items}</Pagination>
                </Col>
            </Row>
        </Card.Body>
    </Card>`,
  },
];

// Popovers Component
export const PopoversData = [
  {
    title: "Popovers",
    imports: `import { useState } from "react";
    import { Row, Col, Card, OverlayTrigger, Popover, Button } from "react-bootstrap";`,
    show_content: `
    {['top', 'right', 'bottom', 'left'].map((placement) => (
      <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
              <Popover id={'popover-positioned-$ = {placement}'}>
                  <Popover.Header as="h3">{'Popover $ {placement}'}</Popover.Header>
                  <Popover.Body>
                      <strong>Holy guacamole!</strong> Check this info.
                  </Popover.Body>
              </Popover>
          }
      >
          <Button variant="primary m" className="me-3">Popover on {placement}</Button>
      </OverlayTrigger>
  ))}`,
  },
];

// Badge Component
export const BadgeData = [
  {
    title: "Badge",
    imports: `import { useState } from "react";
    import { Row, Col, Card, Badge, Button, Dropdown, Image, } from "react-bootstrap";
    import { BsFillBellFill } from "react-icons/bs";
    import { Link } from "react-router-dom";`,
    show_content: `
      <Row className="mb-4">
      <Col xs={12} sm={12} md={12}>
          <Row className="mb-2">
              <Col xs={12} sm={12} md={7}>
                  <h1 className="fw-medium font-22">Badge</h1>
              </Col>
              <Col xs={12} sm={12} md={5} className="text-end">
                  <ViewCodeButton show={show} setShow={setShow} />
              </Col>
          </Row>
      </Col>

      <Col xs={12} sm={12} md={12} className="mb-5">
          <Card>
              <Card.Body>
                  <Row>
                      <Col sm={12}>
                          <p className="font-16">Badges</p>
                      </Col>
                      <Col sm={12} className="mb-4">
                          <Badge bg="primary">
                              Primary
                          </Badge>{' '}
                          <Badge bg="secondary">
                              Secondary
                          </Badge>{' '}
                          <Badge bg="success">
                              Success
                          </Badge>{' '}
                          <Badge bg="danger">
                              Danger
                          </Badge>{' '}
                          <Badge bg="warning" text="dark">
                              Warning
                          </Badge>{' '}
                          <Badge bg="info">
                              Info
                          </Badge>{' '}
                          <Badge bg="light" text="dark">
                              Light
                          </Badge>{' '}
                          <Badge bg="dark">
                              Dark
                          </Badge>
                      </Col>
                      <Col sm={12}>
                          <p className="font-16">Pill badges</p>
                      </Col>
                      <Col sm={12} className="mb-4">
                          <Badge pill bg="primary">
                              Primary
                          </Badge>{' '}
                          <Badge pill bg="secondary">
                              Secondary
                          </Badge>{' '}
                          <Badge pill bg="success">
                              Success
                          </Badge>{' '}
                          <Badge pill bg="danger">
                              Danger
                          </Badge>{' '}
                          <Badge pill bg="warning" text="dark">
                              Warning
                          </Badge>{' '}
                          <Badge pill bg="info">
                              Info
                          </Badge>{' '}
                          <Badge pill bg="light" text="dark">
                              Light
                          </Badge>{' '}
                          <Badge pill bg="dark">
                              Dark
                          </Badge>
                      </Col>
                      <Col sm={12}>
                          <p className="font-16">Examples</p>
                      </Col>
                      <Col sm={12}>
                          <div className="">
                              <Button variant="primary" className="me-5">
                                  Notifications <Badge bg="danger" shape="rounded-pill">9</Badge>
                                  <span className="visually-hidden">unread messages</span>
                              </Button>

                              <Button color="primary" className="position-relative me-5">
                                  Index
                                  <Badge color="danger" shape="rounded-pill"
                                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                      99+ <span className="visually-hidden">unread messages</span>
                                  </Badge>
                              </Button>

                              <Button color="primary" className="position-relative me-5">
                                  Profile
                                  <Badge color="danger" shape="rounded-pill"
                                      className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                      <span className="visually-hidden">unread messages</span>
                                  </Badge>
                              </Button>

                              <Link className="position-relative me-3 text-primary">
                                  <BsFillBellFill size='30' />
                                  <Badge color="danger" shape="rounded-pill"
                                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                      9 <span className="visually-hidden">unread messages</span>
                                  </Badge>
                              </Link>
                          </div>
                      </Col>
                  </Row>
              </Card.Body>
          </Card>
      </Col>

      <Col xs={12} sm={12} md={12} className="mb-2">
          <h1 className="fw-medium font-22">Notification Dropdown</h1>
      </Col>
      <Col xs={12} sm={12} md={12}>
          <Card>
              <Card.Body>
                  <Row>
                      <Col xs={12} sm={12} md={12}>
                          <Dropdown>
                              <Dropdown.Toggle className="position-relative me-3 text-primary" variant="text-primary">
                                  <BsFillBellFill size='30' />
                                  <Badge color="danger" shape="rounded-pill"
                                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                      9 <span className="visually-hidden">unread messages</span>
                                  </Badge>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                  <Dropdown.Item eventKey="1" color="primary">
                                      <Row className="align-items-center">
                                          <Col sm={2}>
                                              <Image src="https://static.onecms.io/wp-content/uploads/sites/37/2018/08/15232727/farmhouse-side-table-1b990c68.jpg" 
                                              width="40px" height="40px" roundedCircle  className="me-3"/>
                                          </Col>
                                          <Col sm={10}>
                                              <small>March 12, 2022 <br></br> <span className="fw-bold">A new monthly report is ready to download!</span></small>
                                          </Col>
                                      </Row>
                                  </Dropdown.Item>
                                  <Dropdown.Item eventKey="2">
                                      <Row className="align-items-center">
                                          <Col sm={2}>
                                              <Image src="https://static.onecms.io/wp-content/uploads/sites/37/2018/08/15232727/farmhouse-side-table-1b990c68.jpg" 
                                              width="40px" height="40px" roundedCircle  className="me-3"/>
                                          </Col>
                                          <Col sm={10}>
                                              <small>March 12, 2022 <br></br> <span className="fw-bold">A new monthly report is ready to download!</span></small>
                                          </Col>
                                      </Row>
                                  </Dropdown.Item>
                                  <Dropdown.Item eventKey="3">
                                      <Row className="align-items-center">
                                          <Col sm={2}>
                                              <Image src="https://static.onecms.io/wp-content/uploads/sites/37/2018/08/15232727/farmhouse-side-table-1b990c68.jpg" 
                                              width="40px" height="40px" roundedCircle  className="me-3"/>
                                          </Col>
                                          <Col sm={10}>
                                              <small>March 12, 2022 <br></br> <span className="fw-bold">A new monthly report is ready to download!</span></small>
                                          </Col>
                                      </Row>
                                  </Dropdown.Item>
                                  <Dropdown.Divider />
                                  <Dropdown.Item eventKey="4" className="text-center font-13"> Show All Alerts </Dropdown.Item>
                              </Dropdown.Menu>
                          </Dropdown>         
                      </Col>
                  </Row>
              </Card.Body>
          </Card>
      </Col>
  </Row> `,
  },
];

// Breadcrumb Component
export const BreadcrumbData = [
  {
    title: "Breadcrumb",
    imports: `import { useState } from "react";
    import { Row, Col, Card, Breadcrumb } from "react-bootstrap";`,
    show_content: `
    <Card>
      <Card.Body>
          <Row>
              <Col sm={12}>
                  <p className="font-16">Type 1</p>                                    
                  <Breadcrumb>
                      <Breadcrumb.Item href="#" className="text-warning">Home</Breadcrumb.Item>
                      <Breadcrumb.Item className="text-warning" href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                          Library
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                  </Breadcrumb>
                  <br />
                  <p className="font-16">Type 2</p>                                    
                  <Breadcrumb className="m-0">
                      <Breadcrumb.Item href="#" className="text-warning">Home</Breadcrumb.Item>
                      <Breadcrumb.Item className="text-warning" href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                          Library
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>Data</Breadcrumb.Item>
                  </Breadcrumb>
              </Col>
          </Row>
      </Card.Body>
  </Card> `,
  },
];

// Buttons Component
export const ButtonsData = [
  {
    title: "Breadcrumb",
    imports: `import { useState } from "react";
    import { Row, Col, Card, Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";`,
    show_content: `
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Radio 1', value: '1' },
        { name: 'Radio 2', value: '2' },
        { name: 'Radio 3', value: '3' },
    ];
    <Row className="mb-4">
      <Col xs={12} sm={12} md={12}>
          <Row className="mb-2">
              <Col xs={12} sm={12} md={7}>
                  <h1 className="fw-medium font-22">Buttons</h1>
              </Col>
              <Col xs={12} sm={12} md={5} className="text-end">
                  <ViewCodeButton show={show} setShow={setShow} />
              </Col>
          </Row>
      </Col>

      <Col xs={12} sm={12} md={12} className="mb-5">
          <Card>
              <Card.Body>
                  <Row>
                      <Col sm={12}>
                          <p className="font-16">Solid Buttons</p>
                      </Col>
                      <Col sm={12} className="mb-3">
                          <Button variant="primary">Primary</Button>{' '}
                          <Button variant="secondary">Secondary</Button>{' '}
                          <Button variant="success">Success</Button>{' '}
                          <Button variant="warning">Warning</Button>{' '}
                          <Button variant="danger">Danger</Button>{' '}
                          <Button variant="info">Info</Button>{' '}
                          <Button variant="light">Light</Button>{' '}
                          <Button variant="dark">Dark</Button>
                          <Button variant="link">Link</Button>
                      </Col>

                      <Col sm={12}>
                          <p className="font-16">Outline Buttons</p>
                      </Col>
                      <Col sm={12}>
                          <Button variant="outline-primary">Primary</Button>{' '}
                          <Button variant="outline-secondary">Secondary</Button>{' '}
                          <Button variant="outline-success">Success</Button>{' '}
                          <Button variant="outline-warning">Warning</Button>{' '}
                          <Button variant="outline-danger">Danger</Button>{' '}
                          <Button variant="outline-info">Info</Button>{' '}
                          <Button variant="outline-light">Light</Button>{' '}
                          <Button variant="outline-dark">Dark</Button>
                      </Col>
                  </Row>
              </Card.Body>
          </Card>
      </Col>

      <Col xs={12} sm={12} md={12}>
          <h1 className="fw-medium font-22">Button group</h1>
      </Col>

      <Col xs={12} sm={12} md={12} className="mb-5">
          <Card>
              <Card.Body>
                  <Row>
                      <Col sm={6}>
                          <p className="font-16">Basic example</p>
                          <ButtonGroup aria-label="Basic example" className="mb-4">
                              <Button variant="primary" className="px-3">Left</Button>
                              <Button variant="primary" className="px-3">Middle</Button>
                              <Button variant="primary" className="px-3">Right</Button>
                          </ButtonGroup>

                          <p className="font-16">Checkbox Button Groups</p>
                          <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                              <ToggleButton id="tbg-check-1" variant="outline-primary" value={1}>
                                  Checkbox 1
                              </ToggleButton>
                              <ToggleButton id="tbg-check-2" variant="outline-primary" value={2}>
                                  Checkbox 2
                              </ToggleButton>
                              <ToggleButton id="tbg-check-3" variant="outline-primary" value={3}>
                                  Checkbox 3
                              </ToggleButton>
                          </ToggleButtonGroup>
                      </Col>

                      <Col sm={6} className="mb-3">
                          <p className="font-16">Outline example</p>
                          <ButtonGroup aria-label="Basic example" className="mb-4">
                              <Button variant="outline-primary" className="px-3">Left</Button>
                              <Button variant="outline-primary" className="px-3">Middle</Button>
                              <Button variant="outline-primary" className="px-3">Right</Button>
                          </ButtonGroup>

                          <p className="font-16">Radio Button Groups</p>
                          <ButtonGroup>
                              {radios.map((radio, idx) => (
                                  <ToggleButton
                                      key={idx}
                                      id={'radio-$ {idx}}
                                      type="radio"
                                      variant="outline-primary"
                                      name="radio"
                                      value={radio.value}
                                      checked={radioValue === radio.value}
                                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                                  >
                                      {radio.name}
                                  </ToggleButton>
                              ))}
                          </ButtonGroup>
                      </Col>
                  </Row>
              </Card.Body>
          </Card>
      </Col>
  </Row> `,
  },
];

// Basic Form Component
export const BasicFormData = [
  {
    title: "Basic Form",
    imports: `import { useState } from "react";
    import { Row, Col, Card, Form, Button } from "react-bootstrap";`,
    show_content: `
    <Card>
      <Card.Body>
          <Form>
              <Row>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4" controlId="formBasicName">
                          <Form.Label className="text-uppercase">Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter name" />
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                          <Form.Label className="text-uppercase">Email</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4" controlId="formBasicMobile">
                          <Form.Label className="text-uppercase">Mobile Number</Form.Label>
                          <Form.Control type="number" placeholder="Enter mobile" />
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4" controlId="formBasicPassword">
                          <Form.Label className="text-uppercase">Password</Form.Label>
                          <Form.Control type="password" placeholder="Enter password" />
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4">
                          <Form.Label className="text-uppercase">Disabled input</Form.Label>
                          <Form.Control type="text" placeholder="" disabled />
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4">
                          <Form.Label className="text-uppercase">Readonly</Form.Label>
                          <Form.Control type="text" value="Admin Template" readOnly />
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4">
                          <Form.Label className="text-uppercase">Select Input</Form.Label>
                          <Form.Select aria-label="Select Input">
                              <option>Select your age</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                          </Form.Select>
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4">
                          <Form.Label className="text-uppercase">Range Input</Form.Label>
                          <Form.Range />
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4">
                          <Form.Label className="text-uppercase">Status</Form.Label>
                          <div className="d-flex">
                              <Form.Check label="Default Checkbox" type="checkbox" id="custom-Checkbox" className="me-3" />
                              <Form.Check label="Checked" type="checkbox" id="custom-Checkbox1" checked />
                          </div>
                          <Form.Check label="Inline disabled checkbox" type="checkbox" id="custom-Checkbox3" disabled />
                          <Form.Check label="Disabled Checked" type="checkbox" id="custom-Checkbox1" checked disabled />
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4">
                          <Form.Label className="text-uppercase">Status</Form.Label>
                          <div className="d-flex mb-2">
                              <Form.Check label="Default" type="radio" id="custom-radio1" />
                              <Form.Check label="Default" type="radio" id="custom-radio2" className="mx-3" />
                              <Form.Check label="Slected" type="radio" id="custom-radio3" checked />
                          </div>
                          <div className="d-flex">
                              <Form.Check label="Disabled" type="radio" id="custom-radio4" disabled className="me-2" />
                              <Form.Check label="Disabled Checked" type="radio" id="custom-radio5" checked disabled />
                          </div>
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4">
                          <Form.Label className="text-uppercase">Toggle Switch</Form.Label>
                          <Form.Check label="Toggle this switch element" type="switch" id="custom-switch" className="mb-2" />
                          <Form.Check label="Toggle this switch element" type="switch" id="custom-switch" disabled />
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4">
                          <Form.Label className="text-uppercase">File upload </Form.Label>
                          <Form.Control type="file" />
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4">
                          <Form.Label className="text-uppercase">Multiple Select</Form.Label>
                          <Form.Select multiple >
                              <option>Select your age</option>
                              <option value="1" selected>One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                              <option value="4">Four</option>
                              <option value="5">Five</option>
                              <option value="6">Six</option>
                              <option value="7">Seven</option>
                          </Form.Select>
                      </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={4} lg={4}>
                      <Form.Group className="mb-4">
                          <Form.Label className="text-uppercase">Textarea</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                  </Col>
                  <Col className="text-end" xs={12} sm={12} md={12} lg={12}>
                      <Button variant="outline-secondary" type="submit" className="me-3 px-3"> Cancel </Button>
                      <Button variant="primary" type="submit" className="px-3"> Submit </Button>
                  </Col>
              </Row>
          </Form>
      </Card.Body>
    </Card>
    `,
  },
];

// Advanced Form Component
export const AdvancedFormData = [
  {
    title: "Advanced Form",
    imports: `import { useState } from "react";
    import { Row, Col, Card, Form, Button } from "react-bootstrap";`,
    show_content: `
    
    `,
  },
];

// Spinner Component
export const SpinnerData = [
  {
    title: "Spinner",
    imports: `import { useState } from "react";
    import { Row, Col, Card, Spinner, Button } from "react-bootstrap";`,
    show_content: `
    <Card>
      <Card.Body>
          <Row>
              <Col xs={12} sm={12} md={12} lg={12} className="mb-4">
                  <p>Ajax Loader</p>
                  <Spinner animation="border" role="status" variant="primary" className="me-5">
                      <span className="visually-hidden">Loading...</span>
                  </Spinner>
                  <Spinner animation="grow" variant="primary" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                  <p>Button Loading</p>
                  <Button variant="primary" disabled className="me-3">
                      <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                      />
                      <span className="visually-hidden">Loading...</span>
                  </Button> 
                  <Button variant="primary" disabled>
                      <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                      />
                      Loading...
                  </Button>
              </Col>
          </Row>
      </Card.Body>
  </Card> `,
  },
];

// Toasts Component
export const ToastsData = [
  {
    title: "Toasts",
    imports: `import { useState } from "react";
    import { Row, Col, Card, Toast, Button } from "react-bootstrap";`,
    show_content: `
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    <Card>
      <Card.Body>
          <Row>
              <Col md={6} className="mb-2">
                  <Button onClick={toggleShowA} className="mb-2">
                      Toggle Toast <strong>with</strong> Animation
                  </Button>
                  <Toast show={showA} onClose={toggleShowA}>
                      <Toast.Header>
                          <img
                              src="holder.js/20x20?text=%20"
                              className="rounded me-2"
                              alt=""
                          />
                          <strong className="me-auto">Bootstrap</strong>
                          <small>11 mins ago</small>
                      </Toast.Header>
                      <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                  </Toast>
              </Col>
              <Col md={6} className="mb-2">
                  <Button onClick={toggleShowB} className="mb-2">
                      Toggle Toast <strong>without</strong> Animation
                  </Button>
                  <Toast onClose={toggleShowB} show={showB} animation={false}>
                      <Toast.Header>
                          <img
                              src="holder.js/20x20?text=%20"
                              className="rounded me-2"
                              alt=""
                          />
                          <strong className="me-auto">Bootstrap</strong>
                          <small>11 mins ago</small>
                      </Toast.Header>
                      <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                  </Toast>
              </Col>
          </Row>
      </Card.Body>
  </Card> `,
  },
];

// Sweet Alert Component
export const SweetAlertData = [
  {
    title: "Sweet Alert",
    imports: `import { useState } from "react";
    import { Row, Col, Card, Button } from "react-bootstrap";
    import Swal from 'react-bootstrap-sweetalert';`,
    show_content: `
    const [showAlert, setShowAlert] = useState(false);

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    <Card>
      <Card.Body>
          <Row>
              <Col sm={12}>
                  <Button onClick={() => setShowAlert(true)} className="px-4">Show sweet alert</Button>
                  <Swal
                      success
                      show={showAlert}
                      title="Woot!"
                      text=" I did it!"
                      onConfirm={handleCloseAlert}
                      onCancel={handleCloseAlert}
                      confirmBtnBsStyle="success"
                      cancelBtnBsStyle="danger"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                  />
              </Col>
          </Row>
      </Card.Body>
  </Card> `,
  },
];

// Tooltip Component
export const TooltipData = [
  {
    title: "Tooltip",
    imports: `import { useState } from "react";
    import { Row, Col, Card, OverlayTrigger, Popover, Button, Tooltip } from "react-bootstrap";`,
    show_content: `
    <Card>
      <Card.Body>
          <Row>
              <Col sm={12} className="mb-4">
                  <p>Popovers</p>
                  {['top', 'right', 'bottom', 'left'].map((placement) => (
                      <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                              <Popover id={'popover-positioned-$ {placement}'}>
                                  <Popover.Header as="h3">{'Popover $ {placement}'}</Popover.Header>
                                  <Popover.Body>
                                      <strong>Holy guacamole!</strong> Check this info.
                                  </Popover.Body>
                              </Popover>
                          }
                      >
                          <Button variant="primary" className="mx-3 px-4">Popover on {placement}</Button>
                      </OverlayTrigger>
                  ))}
              </Col>
              <Col sm={12}>
                  <p>Tooltip</p>
                  {['top', 'right', 'bottom', 'left'].map((placement) => (
                      <OverlayTrigger
                          key={placement}
                          placement={placement}
                          overlay={
                              <Tooltip id={'tooltip- $ {placement}'}>
                                  Tooltip on <strong>{placement}</strong>.
                              </Tooltip>
                          }
                      >
                          <Button variant="primary" className="mx-3 px-4">Tooltip on {placement}</Button>
                      </OverlayTrigger>
                  ))}
              </Col>
          </Row>
      </Card.Body>
  </Card> `,
  },
];