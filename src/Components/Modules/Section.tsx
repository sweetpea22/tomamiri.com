import React, { ReactNode } from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";

type SectionProps = {
  children?: ReactNode;
};

const useStyles = makeStyles(({ breakpoints }: ITheme) => {

  return createStyles({
    section: {
      padding: "0",
      margin: "0 auto",
      position: "relative",
      [breakpoints.down('md')]: {
        maxWidth: "100%",
      },
    }
  })
})

const Section: React.FC = ({
  children,
}: SectionProps) => {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      {children}
    </section>
  );
};

export default Section;
