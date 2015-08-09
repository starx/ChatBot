<?php
namespace ChatbotBundle\Services;

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;


class ChatServerService
{
    private $serverPort;
    private $chatManager;

    /**
     * @param int $serverPort
     */
    public function setServerPort($serverPort)
    {
        $this->serverPort = $serverPort;
    }

    public function __construct(ChatMessageService $chatManager) {
        $this -> chatManager = $chatManager;
    }

    public function create() {
        echo "Creating the server.\n";
        $server = IoServer::factory(
            new HttpServer(
                new WsServer(
                    $this -> chatManager
                )
            ),
            $this -> serverPort
        );
        $server -> run();
    }

}