import React from "react";
import { Button } from "../../globalStyles";
import { GiCutDiamond, GiRock } from "react-icons/gi";

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.style";

const Pricing = () => {
  return (
    <PricingSection>
      <PricingWrapper>
        <PricingHeading>Our Services</PricingHeading>
        <PricingContainer>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <GiRock />
              </PricingCardIcon>
              <PricingCardPlan>Starter Pack</PricingCardPlan>
              <PricingCardCost> 999.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>
                  20% Off on Selected Items
                </PricingCardFeature>
                <PricingCardFeature>
                  Buy 3 Get 1 @ Wednesdays
                </PricingCardFeature>
                <PricingCardFeature>
                  Free Goodies on shopping above 2000
                </PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <GiCutDiamond />
              </PricingCardIcon>
              <PricingCardPlan>Diamond Pack</PricingCardPlan>
              <PricingCardCost> 1999.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>
                  40% Off on Selected Items
                </PricingCardFeature>
                <PricingCardFeature>
                  Buy 3 Get 3 @ Wednesdays
                </PricingCardFeature>
                <PricingCardFeature>
                  Free Goodies on shopping above 5000
                </PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <GiRock />
              </PricingCardIcon>
              <PricingCardPlan>Starter Pack</PricingCardPlan>
              <PricingCardCost> 4999.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>
                  80% Off on Selected Items
                </PricingCardFeature>
                <PricingCardFeature>
                  Buy 5 Get 5 @ Wednesdays
                </PricingCardFeature>
                <PricingCardFeature>
                  Free Goodies on Every Sundays.
                </PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCardInfo>
          </PricingCard>
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  );
};

export default Pricing;
