import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Hamburger = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <div className="md:hidden">
        <HamburgerIcon h={30} w={30} className="hover:text-purple-400 duration-300 transition-all cursor-pointer" 
        onClick={onOpen}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody className="w-">
              <div className="z-20">
                <Link to={"/home"} className="link w-full">Home</Link>
                <Link to={"/profile"} className="link w-full">Profile</Link>
                <Link to={"/products"} className="link">Products</Link>
                <Link to={"/skills"} className="link">Skills</Link>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
  )
}

export default Hamburger