export default function ({
  person,
}: {
  person: { name: string; age: number; hobby: string };
}) {
  const { name , age , hobby, } = person;
  return (
    <div>
      hello, my name is {name}, i'm {age} years old, i love {hobby}
    </div>
  );
}
