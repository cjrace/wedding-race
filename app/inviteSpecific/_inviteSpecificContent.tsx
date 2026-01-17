"use client";

import { Title, Text, Space, Grid, Divider } from "@mantine/core";
import Image from "next/image";
import FullVillage from "@/public/images/full-village.png";
import Cottages from "@/public/images/cottages.png";

export default function InviteSpecificContent() {
  return (
    <>
      
      <Text>
        Hello [personalised text] </Text>     
      
      Name

      Para 1

      Para 2

      Para N


      Form options



    <Divider my="md" />
    <Text fw={500} mb="xs">Will you be attending?</Text>
    <div>
      <label>
        <input type="radio" name="attending" value="yes" /> Yes
      </label>
      <Space w="md" component="span" />
      <label>
        <input type="radio" name="attending" value="no" /> No
      </label>
    </div>


Will you be attending our wedding 
Will you be staying at the village
	One night or two
Will you be bringing a plus one
	Details
Any dietary requirements

Do you want to be notified of later updates (email or phone)


    </>
  );
}
