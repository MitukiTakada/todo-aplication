import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className="md:hidden">
        <HamburgerIcon h={30} w={30} className="hover:text-purple-400 duration-300 transition-all cursor-pointer" 
        onClick={onOpen}
        />
        <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
          <DrawerOverlay>
            <DrawerContent>
              <DrawerBody className="w-2/5 bg-slate-200 h-full p-12">
                <div className="z-20 space-y-5 text-xl">
                  <Link to={"/home"} className="link drawer-link">Home</Link>
                  <Link to={"/profile"} className="link drawer-link">Profile</Link>
                  <Link to={"/products"} className="link drawer-link">Products</Link>
                  <Link to={"/skills"} className="link drawer-link">Skills</Link>
                  <Link to={"/contact"} className="link drawer-link">Contact</Link>
                  <DrawerCloseButton className="text-white text-md  p-2 rounded mt-12 mx-auto bg-red-400 transition-all duration-300 hover:bg-red-700 ">閉じる</DrawerCloseButton>
                </div>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </div>
  )
}

export default Hamburger