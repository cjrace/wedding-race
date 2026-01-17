"use client";

import { Title, Text, Space, Grid, Divider } from "@mantine/core";
import Image from "next/image";
import FullVillage from "@/public/images/full-village.png";
import Cottages from "@/public/images/cottages.png";

export default function InviteContent() {
  return (
    <>
      
      <Text>
        It's time to RSVP. Add your code below to enter specific invite text for you.
        </Text>     
      
    

      <Space h="md" />
      <Grid>
        <Grid.Col span="auto">
          <input
        type="text"
        placeholder="Enter your code"
        style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          />
        </Grid.Col>
        <Grid.Col span="content">
          <button
        type="submit"
        style={{
          padding: "8px 16px",
          fontSize: "16px",
          background: "#228be6",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
          >
        Submit
          </button>
        </Grid.Col>
      </Grid>
      <Space h="md" />




    
    </>
  );
}
