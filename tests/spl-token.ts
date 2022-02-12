import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Spltoken } from "../target/types/spltoken";

describe("spltoken", () => {
    anchor.setProvider(anchor.Provider.env());

    const program = anchor.workspace.Spltoken as Program<Spltoken>;

    it("Is initialized!", async () => {
        const tx = await program.rpc.proxyTransfer({});
        console.log("Your transaction signature", tx);
    });
});
