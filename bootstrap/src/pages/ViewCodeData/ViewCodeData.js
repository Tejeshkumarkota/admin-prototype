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