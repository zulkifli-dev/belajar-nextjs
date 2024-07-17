function delayTime(time: number) {
  return new Promise((resolve: any) =>
    setTimeout(() => {
      resolve(["barang 1", "barang 2", "barang 3"]);
    }, time)
  );
}

async function page() {
  const produk: any = await delayTime(10000);

  return <div>{JSON.stringify(produk)}</div>;
}

export default page;
