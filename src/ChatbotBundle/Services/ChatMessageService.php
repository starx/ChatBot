<?php
namespace ChatbotBundle\Services;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class ChatMessageService implements MessageComponentInterface
{
    protected $clients;

    public function __construct() {
        $this -> clients = new \SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $conn) {
        // Store the new connection to send messgaes to later
        $this -> clients -> attach($conn);
        echo "New connection! ({$conn->resourceId})\n";
    }

    public function onMessage(ConnectionInterface $from, $msg) {
        $numRecv = count($this->clients) -1;
        echo sprintf(
            'Connection %d sending message "%s" to %d other connection%s'."\n",
            $from->resourceId,
            $msg,
            $numRecv,
            $numRecv == 1 ? '' : 's'
        );

        foreach($this->clients as $client) {
            if($from !== $client) {
                // The sender is nto the receiver, sent to each client connected
                $client->send($msg);
            }
        }
    }

    public function onClose(ConnectionInterface $conn) {
        // The connection is closed, remove it, as we can no longer send it messages
        $this->clients->detach($conn);
        echo "Connection {$conn->resourceId} has disconnected\n";

    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "An error has occurred: {$e -> getMessage()}\n";
        $conn->close();
    }
}