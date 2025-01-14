"use client"
import { renderContent } from "@/app/resources";
import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
// import { person, social } from '@/app/resources'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const t = useTranslations();
  const { person, social } = renderContent(t);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="8"
      justifyContent="center"
    >
      <Flex
      fillWidth
      maxWidth="m"
      paddingY="8"
      justifyContent="space-between"
      alignItems="center"
      mobileDirection="column"
      style={{ marginBottom: isMobile ? "80px" : "0px" }}

    
      >
    
      <Text variant="body-default-s" onBackground="neutral-strong" align="center">
        <Text onBackground="neutral-weak">© {currentYear} /</Text>
        <Text paddingX="4">{person.name}</Text>
        <Text onBackground="neutral-weak">
        {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
        / Find my projects at{" "}
        <SmartLink style={{ marginLeft: "-0.125rem" }} href="https://github.com/soniyaprasad77">
          Github
        </SmartLink>
        </Text>
      </Text>
      <Flex gap="16">
        {social.map(
        (item) =>
          item.link && (
          <IconButton
            key={item.name}
            href={item.link}
            icon={item.icon}
            tooltip={item.name}
            size="s"
            variant="ghost"
          />
          )
        )}
      </Flex>
      </Flex>
    </Flex>
  );
};
