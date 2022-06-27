import { Add, Delete } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import TextInputComponent from "../components/TextInputComponent";
import { PrimaryIconButton } from "./MyButtons";

export default function CreateCategory() {
  const [data, setData] = useState({ category: "", subCategories: [] });

  const increment = () => {
    setData((data) => []);
  };

  const deleteCategory = (index) => {
    setData(data.subCategories.filter((a, i) => i !== index));
  };
  return (
    <div>
      <Typography color="GrayText" gutterBottom>
        Create new category
      </Typography>
      <div className="">
        <TextInputComponent
          fullWidth
          label="Category"
          helperText={"Category name"}
        />
        <PrimaryIconButton
          onClick={increment}
          icon={<Add />}
        ></PrimaryIconButton>
        {/* <div className="mt-2">
          {data.subCategories.map((cat, i) => (
            <Stack direction="row" key={i}>
              <div>
                <TextInputComponent label="Sub Category" />
              </div>
              {i > 0 ? (
                <div>
                  <IconButton
                    onClick={() => {
                      deleteCategory(i);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </div>
              ) : null}
            </Stack>
          ))}
        </div> */}
      </div>
    </div>
  );
}
