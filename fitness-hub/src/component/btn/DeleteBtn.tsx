import Image from 'next/image'
type Props={
    removeThis:()=>void;
}

const DeleteBtn = ({removeThis}:Props) => {
    return (
         <button onClick={()=>removeThis()}>
            <Image
             src="/remove (1).png"
             width={28}
             height={28}
             alt='delete pic'
             >
            </Image></button>
    );
};

export default DeleteBtn;