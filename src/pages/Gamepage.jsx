import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import paper from "../assets/paper.png";
import rock from "../assets/rock.png";
import scissors from "../assets/scissors.png";
import Score from "../components/Score";
function Gamepage() {
  return (
    <>
      <Flex>
        <Score playerOne={0} playerTwo={0} />
        <Flex>
          <Image
            boxSize="200px"
            objectFit="cover"
            m={2}
            src={rock}
            alt="rock"
            _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
          />
          <Image
            boxSize="200px"
            objectFit="cover"
            m={2}
            src={paper}
            alt="paper"
            _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
          />
          <Image
            boxSize="200px"
            objectFit="cover"
            m={2}
            src={scissors}
            alt="scissors"
            _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
          />
        </Flex>
      </Flex>
    </>
  );
}

export default Gamepage;
