import React, { useState, useEffect, useRef, useCallback } from "react";
import "./form.scss";

import {
  Button,
  DataTable,
  DatePicker,
  DatePickerInput,
  Dropdown,
  Search,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TextInput,
  ToolbarSearch,
} from "carbon-components-react";
const Form = () => {
  const [poid, setPoid] = useState<any>();
  const [poNo, setPoNo] = useState<any>();

  const [date, setDate] = useState(0);
  const [show, setShow] = useState(false);

  const [program, setProgram] = useState<any>("");

  const [vendor, setVendor] = useState<any>("");

  const rows = [
    {
      id: "a",
      name: "Load balancer 1",
      status: "Disabled",
    },
    {
      id: "b",
      name: "Load balancer 2",
      status: "Starting",
    },
    {
      id: "c",
      name: "Load balancer 3",
      status: "Active",
    },
  ];

  const headers = [
    {
      key: "name",
      header: "Line",
    },
    {
      key: "name",
      header: "item Number",
    },
    {
      key: "name",
      header: "NDC",
    },
    {
      key: "name",
      header: "item Description",
    },
    {
      key: "name",
      header: "Pack",
    },
    {
      key: "name",
      header: "Unit Price",
    },
    {
      key: "name",
      header: "Quantity Ordered",
    },
  ];
  //   useEffect(() => {
  //     const scrollHostElement: any = scrollHostRef.current;
  //     const { clientWidth, scrollWidth } = scrollHostElement;
  //     const scrollBoxPercentage = clientWidth / scrollWidth;
  //     const scrollbarHeight = Math.max(
  //       scrollBoxPercentage * clientWidth,
  //       SCROLL_BOX_MIN_WIDTH
  //     );
  //     setScrollBoxWidth(scrollbarHeight);
  //     scrollHostElement.addEventListener("scroll", handleScroll, true);
  //     return function cleanup() {
  //       scrollHostElement.removeEventListener("scroll", handleScroll, true);
  //     };
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [window.innerHeight, window.innerWidth]);
  useEffect(() => {
    console.log("vendor", vendor);
  }, []);
  const handlePoid = (event: any) => {
    setPoid(event.target.value);
  };
  const handlePono = (event: any) => {
    setPoNo(event.target.value);
  };
  return (
    <div>
      <div className="outerForm">
        <div className="titleHeader">Inventory Receiving</div>
        <div>PO Entry</div>
        <div className="myChallenges">
          <div className="textBox">
            <TextInput
              id="test2"
              invalidText="A valid value is required"
              labelText="PO ID"
              placeholder="Placeholder text"
              onChange={(e) => handlePoid(e)}
              value={poid}
            />
          </div>
          <div className="textBox">
            <TextInput
              id="test2"
              invalidText="A valid value is required"
              labelText="PO Number"
              placeholder="Placeholder text"
              onChange={(e) => handlePono(e)}
              value={poNo}
            />
          </div>
          <div className="textBox">
            <DatePicker datePickerType="single" value={new Date().setDate(-10)}>
              <DatePickerInput
                id="date-picker-simple"
                placeholder="mm/dd/yyyy"
                labelText="Receiving Date"
              />
            </DatePicker>
          </div>
          <div className="textBox">
            <Dropdown
              ariaLabel="Dropdown"
              id="carbon-dropdown-example"
              items={[
                "TB",
                "ZO",
                "Program 4",
                "Program 5",
                "Program 6",
                "Program 7",
                "Program 8",
              ]}
              // itemToString={(item) => (item ? item.text : "")}
              // onChange={({ selectedItem }) => setProgram(selectedItem)}
              // selectedItem={program}
              label="Program"
              titleText="Enter your Program name"
            />
          </div>
          <div className="textBox">
            <Dropdown
              ariaLabel="Dropdown"
              id="carbon-dropdown-example"
              items={[
                "Vendor 1",
                "Vendor 2",
                "Vendor 3",
                "Vendor 4",
                "Vendor 5",
                "Vendor 6",
                "Vendor 7",
                "Vendor 8",
                "Vendor 9",
                "Vendor 10",
                "Vendor 11",
                "Vendor 12",
              ]}
              // itemToString={(item) => (item ? item.text : "")}
              onChange={({ selectedItem }) => setVendor(selectedItem)}
              // selectedItem={vendor}
              label="Vendor"
              titleText="Enter your Vendor name"
            />
          </div>
        </div>
        <div className="button">
          <Button
            onClick={() => {
              setDate(0);
              setPoNo(0);
              setPoid(0);
              setProgram("");
              setVendor("");
              setShow(false);
            }}
            className="button-inner"
            kind={"tertiary"}
          >
            Reset
          </Button>
          <Button
            onClick={() => {
              setShow(true);
            }}
            className="button-inner"
          >
            Create PO
          </Button>
        </div>
      </div>
      {show && (
        <div className="search-container">
          <div className="search">
            <Search labelText="Search" id="search-1" placeHolderText="Search" />{" "}
          </div>
          <div className="table-container">
            <DataTable
              rows={rows}
              headers={headers}
              render={({ rows, headers, getHeaderProps }) => (
                <TableContainer title="DataTable">
                  <Table>
                    <TableHead>
                      <TableRow>
                        {headers.map((header) => (
                          <TableHeader {...getHeaderProps({ header })}>
                            {header.header}
                          </TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          {row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
