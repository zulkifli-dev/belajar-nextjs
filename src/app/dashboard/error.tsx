"use client";
function error({ error }: any) {
  return <div>{JSON.stringify(error)}</div>;
}

export default error;
