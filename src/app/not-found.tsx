"use client";
import { Button, Result } from "antd";
import Link from "next/link";

const NotFound = () => {
  return (
    <div >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href="/" passHref>
            <Button type="primary" size="large">
              Back Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;