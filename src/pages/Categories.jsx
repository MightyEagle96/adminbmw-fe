import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { httpService } from "../services/services";
import { Row } from "react-bootstrap";
import CreateCategory from "../components/CreateCategory";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const path = "viewCategories";

    const res = await httpService.get(path);

    if (res) {
      setCategories(res.data.categories);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const columns = [
    { name: "Category", selector: (row) => row.category },
    {
      name: "SubCategories",
      selector: (row) => row.subCategories.join(", "),
    },
  ];

  const expandableComponent = ({ data }) => {
    return <div></div>;
  };
  return (
    <div>
      <div>
        <Typography variant="h6" color="GrayText">
          Product Categories
        </Typography>
      </div>
      <Row>
        <div className="col-md-7">
          <DataTable
            data={categories}
            columns={columns}
            pagination
            expandableRows
            expandableRowsComponent={expandableComponent}
          />
        </div>
        <div className="col-md-5 d-flex align-items-center">
          <CreateCategory />
        </div>
      </Row>
    </div>
  );
}
