import React from "react";
import { Card, Top, Bottom, Description, Price, PlanName } from "./card-parts";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { Stack } from "@bedrock-layout/stack";
import { Grid } from "@bedrock-layout/grid";
import styled from "styled-components";
import { spacingMap } from "./spacingMap";

const PadBox = styled.div`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((padKey) => spacingMap[padKey])
      .join(" ");
  }};
`;
export const Button = styled(PadBox).attrs(() => ({
  as: "button",
  padding: ["sm", "xl"]
}))`
  background: black;
  color: white;
  border: none;
`;
function PricingPlan() {
  return (
    <Card>
      <PadBox padding="lg">
        <Top>
          <PlanName>Basic</PlanName>
          <Description>All the Basics for getting started</Description>
          <Price>$12/mo</Price>
          <InlineCluster gutter="none" justify="center">
            <Button>Buy Basic</Button>
          </InlineCluster>
        </Top>
      </PadBox>
      <Bottom>
        <PadBox padding="lg">
          <Stack gutter="md">
            <span>What's included</span>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Mollis pretium lorem primis senectus habitasse</li>
              <li>Phasellus ante pellentesque erat</li>
            </ul>
          </Stack>
        </PadBox>
      </Bottom>
    </Card>
  );
}

export default function PlanList() {
  return (
    <Grid gutter="xl" minItemWidth="16rem">
      <PricingPlan />
      <PricingPlan />
      <PricingPlan />
      <PricingPlan />
    </Grid>
  );
}
