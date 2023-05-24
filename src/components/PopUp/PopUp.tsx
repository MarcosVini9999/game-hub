import React from "react";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";

interface GameListPopUpProps {
  open: boolean;
  onOpen: () => void;
  title: string;
  body: any;
  extraButtonFunction?: () => void;
  extraButtonLabel?: string;
}

export const PopUp: React.FC<GameListPopUpProps> = ({
  open,
  onOpen,
  title,
  body,
  extraButtonFunction,
  extraButtonLabel,
}) => {
  return (
    <React.Fragment>
      <Dialog open={open} handler={onOpen}>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody divider>{body}</DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={onOpen} className="mr-1">
            <span>Cancel</span>
          </Button>
          {extraButtonFunction ? (
            <Button
              variant="text"
              color="blue"
              onClick={() => {
                extraButtonFunction();
                onOpen();
              }}
              className="mr-1"
            >
              {extraButtonLabel ? extraButtonLabel : "Extra Button"}
            </Button>
          ) : null}
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
};
