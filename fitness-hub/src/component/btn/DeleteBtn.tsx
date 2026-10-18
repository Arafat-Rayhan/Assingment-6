import Image from 'next/image'
type Props={
    removeThis:()=>void;
}

const DeleteBtn = ({removeThis}:Props) => {
    return (
         <button onClick={()=>removeThis()}>
            <Image
             src="/remove (1).png"
             width={50}
             height={50}
             alt='delete pic'
             >
            </Image></button>
    );
};

export default DeleteBtn;